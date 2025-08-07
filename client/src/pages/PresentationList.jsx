import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"



function PresentationList() {
  const [presentations, setPresentations] = useState([])
  const nickname = localStorage.getItem("nickname")
  const navigate = useNavigate()

  useEffect(() => {
    if (!nickname) {
      navigate("/")
      return
    }

    // TODO: fetch presentation list from backend
    setPresentations([
      { id: "abc123", title: "My First Presentation" },
      { id: "xyz789", title: "Team Planning Slides" }
    ])
  }, [])

  const handleCreate = async () => {
  const title = prompt("Presentation title:")
  if (!title) return

  try {
    const res = await axios.post("http://localhost:5000/api/presentations", {
      title,
      nickname,
    })
    navigate(`/presentations/${res.data._id}`)
  } catch (err) {
    console.log(err);
    
    alert("Failed to create presentation")
  }
}

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {nickname}!</h2>

      <button onClick={handleCreate} className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
  + New Presentation
</button>


      <ul className="space-y-2">
        {presentations.map((p) => (
          <li
            key={p.id}
            className="p-4 border rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate(`/presentations/${p.id}`)}
          >
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PresentationList
