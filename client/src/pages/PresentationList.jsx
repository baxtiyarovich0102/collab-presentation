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

    const fetchPresentations = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/presentations?nickname=${nickname}`)
        setPresentations(res.data)
      } catch (err) {
        console.error("Failed to fetch presentations:", err)
      }
    }

    fetchPresentations()
  }, [])

  const handleCreate = () => navigate("/create")

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {nickname}!</h2>

      <button onClick={handleCreate} className="mb-4 bg-green-600 text-white px-4 py-2 rounded">
        + New Presentation
      </button>

      <ul className="space-y-2">
        {presentations.map((p) => (
          <li
            key={p._id}
            className="p-4 border rounded hover:bg-gray-100 cursor-pointer"
            onClick={() => navigate(`/presentations/${p._id}`)}
          >
            {p.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PresentationList
