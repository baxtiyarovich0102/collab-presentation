import { SlideProvider } from './context/SlideContext'
import SlideList from './components/SlideList'
import SlideEditor from './components/SlideEditor'
import Controls from './components/Controls'

function App() {
  return (
    <SlideProvider>
      <div className="h-screen flex flex-col bg-gray-100">
        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/5 border-r bg-white">
            <SlideList />
          </div>
          <div className="w-4/5">
            <SlideEditor />
          </div>
        </div>
        <div className="border-t p-2 bg-white">
          <Controls />
        </div>
      </div>
      
    </SlideProvider>
  )
}

export default App
