import { createContext, useContext, useState } from "react";

// 1. Context yaratish
const SlideContext = createContext();

// 2. Provider komponenti
const SlideProvider = ({ children }) => {
  const [slides, setSlides] = useState([
    { id: 1, content: "First Slide" },
    { id: 2, content: "Second Slide" },
  ]);
  const [currentSlideId, setCurrentSlideId] = useState(slides[0].id);

  const addSlide = () => {
    const newSlide = {
      id: Date.now(),
      content: `New Slide ${slides.length + 1}`,
    };
    setSlides([...slides, newSlide]);
    setCurrentSlideId(newSlide.id);
  };

  const updateSlide = (id, newContent) => {
    setSlides(
      slides.map((slide) =>
        slide.id === id ? { ...slide, content: newContent } : slide
      )
    );
  };

  

  return (
    <SlideContext.Provider
      value={{ slides, currentSlideId, setCurrentSlideId, addSlide, updateSlide }}
    >
      {children}
    </SlideContext.Provider>
  );
};

// 3. Custom hook
const useSlides = () => {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error("useSlides must be used within a SlideProvider");
  }
  return context;
};

// 4. Faqat **named export** qiling
export { SlideProvider, useSlides, SlideContext };
