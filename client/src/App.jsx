import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import PresentationList from "./pages/PresentationList"
import EditorPage from "./pages/EditorPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/presentations" element={<PresentationList />} />
        <Route path="/presentations/:id" element={<EditorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
