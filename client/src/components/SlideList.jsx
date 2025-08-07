// ✅ kerakli importlar
import { useSlides } from "../context/SlideContext"

function SlideList() {
  const { slides, currentSlideId, setCurrentSlideId } = useSlides()

  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
      {slides.map((slide) => (
        <div
          key={slide.id}
          onClick={() => setCurrentSlideId(slide.id)}
          className={`p-2 mb-2 border rounded cursor-pointer ${
            slide.id === currentSlideId ? 'bg-blue-100' : ''
          }`}
        >
          {slide.content || "No content"}
        </div>
      ))}
    </div>
  )
}

export default SlideList // ✅ BO‘LISHI SHART!
