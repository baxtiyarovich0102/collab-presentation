import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SlideProvider } from './context/SlideProvider'
import LoginPage from "./pages/LoginPage"
import PresentationList from "./pages/PresentationList"
import EditorPage from "./pages/EditorPage"
import CreatePresentation from "./pages/CreatePresentation"

function App() {
  return (
    <SlideProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/presentations" element={<PresentationList />} />
          <Route path="/presentations/:id" element={<EditorPage />} />
          <Route path="/create" element={<CreatePresentation />} />
        </Routes>
      </Router>
    </SlideProvider>
  )
}

export default App
