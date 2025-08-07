import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import io from "socket.io-client"

const socket = io("http://localhost:5000") // keyin .env bilan sozlaymiz

function EditorPage() {
  const { id } = useParams()
  const [presentation, setPresentation] = useState(null)

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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Presentation Editor</h1>
      {presentation ? (
        <div>{JSON.stringify(presentation.slides)}</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default EditorPage
