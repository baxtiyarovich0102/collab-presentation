import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreatePresentation() {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const nickname = localStorage.getItem("nickname")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch("http://localhost:5000/api/presentations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, nickname })
    })

    const data = await res.json()

    if (res.ok) {
      navigate(`/presentations/${data._id}`)
    } else {
      setMessage(`Error: ${data.error}`)
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Presentation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </form>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  )
}

export default CreatePresentation
