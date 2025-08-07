import { useSlide } from "../context/SlideProvider"

const Presentation = () => {
  const { slideIndex, changeSlide } = useSlide()

  const slides = ["Slide 1", "Slide 2", "Slide 3"]

  const nextSlide = () => {
    const newIndex = (slideIndex + 1) % slides.length
    changeSlide(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (slideIndex - 1 + slides.length) % slides.length
    changeSlide(newIndex)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-3xl font-bold mb-4">{slides[slideIndex]}</div>
      <div className="space-x-4">
        <button onClick={prevSlide} className="bg-blue-500 text-white px-4 py-2 rounded">
          Prev
        </button>
        <button onClick={nextSlide} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  )
}

export default Presentation
