import { useSlideContext } from "../context/SlideContext";

const SlideList = () => {
  const { slides, currentSlideIndex, setCurrentSlideIndex } = useSlideContext();

  return (
    <div className="mb-4">
      <h2 className="font-bold mb-2">📜 Slide List</h2>
      <ul className="space-y-2">
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            className={`p-2 rounded cursor-pointer ${
              index === currentSlideIndex ? "bg-blue-200" : "bg-gray-100"
            }`}
            onClick={() => setCurrentSlideIndex(index)}
          >
            {index + 1}. {slide.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideList;
