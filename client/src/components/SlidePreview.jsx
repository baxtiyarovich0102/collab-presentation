function SlidePreview({ slide }) {
  if (!slide) {
    return <div className="flex-1 p-4">No slide selected</div>
  }

  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
      <p>{slide.content}</p>
    </div>
  );
}

export default SlidePreview;
