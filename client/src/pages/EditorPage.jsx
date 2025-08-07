import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import io from "socket.io-client"
import axios from "axios"

const socket = io("http://localhost:5000")

function EditorPage() {
  const { id } = useParams()
  const [presentation, setPresentation] = useState(null)

  useEffect(() => {
    const fetchPresentation = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/presentations/${id}`)
        setPresentation(res.data)
      } catch (err) {
        console.error("Error fetching presentation:", err)
      }
    }

    fetchPresentation()
  }, [id])

  useEffect(() => {
    socket.emit("join_presentation", id)

    socket.on("slide_updated", (updatedSlides) => {
      setPresentation((prev) => ({ ...prev, slides: updatedSlides }))
    })

    return () => {
      socket.emit("leave_presentation", id)
      socket.off("slide_updated")
    }
  }, [id])

  if (!presentation) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{presentation.title}</h1>
      <ul>
        {presentation.slides.map((slide, i) => (
          <li key={i} className="mb-2 p-2 border">{slide.content}</li>
        ))}
      </ul>
    </div>
  )
}

export default EditorPage
