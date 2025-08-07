import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const [nickname, setNickname] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (nickname.trim()) {
      localStorage.setItem("nickname", nickname)
      navigate("/presentations")
    }
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Enter Your Nickname</h1>
        <input
          type="text"
          className="w-full border p-2 rounded mb-4"
          placeholder="e.g. ShahriyorDev"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Join
        </button>
      </div>
    </div>
  )
}

export default LoginPage
