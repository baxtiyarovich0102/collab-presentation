import { useSlideContext } from "../context/SlideContext";

const SlideEditor = () => {
  const { currentSlide, updateCurrentSlide } = useSlideContext();

  if (!currentSlide) return <div>No slide selected</div>;

  return (
    <div className="mb-4">
      <h2 className="font-bold mb-2">📝 Slide Editor</h2>
      <input
        className="w-full border p-2 mb-2"
        type="text"
        value={currentSlide.title}
        onChange={(e) => updateCurrentSlide("title", e.target.value)}
        placeholder="Slide Title"
      />
      <textarea
        className="w-full border p-2"
        rows={6}
        value={currentSlide.content}
        onChange={(e) => updateCurrentSlide("content", e.target.value)}
        placeholder="Slide Content"
      />
    </div>
  );
};

export default SlideEditor;
