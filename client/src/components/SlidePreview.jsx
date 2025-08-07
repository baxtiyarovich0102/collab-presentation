import { useSlideContext } from "../context/SlideContext";

const SlidePreview = () => {
  const { currentSlide } = useSlideContext();

  if (!currentSlide) return null;

  return (
    <div className="border p-4 bg-white shadow-md">
      <h3 className="text-lg font-semibold mb-2">{currentSlide.title}</h3>
      <p>{currentSlide.content}</p>
    </div>
  );
};

export default SlidePreview;
