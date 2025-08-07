import { useSlides } from '../context/SlideContext'

const SlideEditor = () => {
  const { slides, currentSlideId, updateSlide } = useSlides() // ✅ To‘g‘ri nomlar
  const selectedSlide = slides.find((slide) => slide.id === currentSlideId)

  const handleChange = (e) => {
    updateSlide(currentSlideId, e.target.value) // ✅ updateSlide ishlatilmoqda
  }

  if (!selectedSlide) return <div className="flex-1 p-4">No slide selected</div>

  return (
    <div className="flex-1 p-4">
      <textarea
        value={selectedSlide.content}
        onChange={handleChange}
        className="w-full h-full p-2 border rounded resize-none text-lg"
        placeholder="Write your slide content here..."
      />
    </div>
  )
}

export default SlideEditor
