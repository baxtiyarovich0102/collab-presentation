import { useSlideContext } from "../context/SlideContext";

const Controls = () => {
  const { addSlide, deleteSlide, currentSlideIndex } = useSlideContext();

  return (
    <div className="flex gap-2 mb-4">
      <button onClick={addSlide} className="bg-blue-500 text-white px-3 py-1 rounded">
        ➕ Add Slide
      </button>
      <button
        onClick={() => deleteSlide(currentSlideIndex)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        🗑️ Delete Slide
      </button>
    </div>
  );
};

export default Controls;
