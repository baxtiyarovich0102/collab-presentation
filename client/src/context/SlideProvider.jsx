import { useState } from "react";
import { SlideContext } from "./SlideContext";

const initialSlides = [
  { id: 1, title: "Welcome", content: "Welcome to our presentation!" },
  { id: 2, title: "About", content: "This is a collaborative tool." },
];

export const SlideProvider = ({ children }) => {
  const [slides, setSlides] = useState(initialSlides);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlide = slides[currentSlideIndex];

  const updateCurrentSlide = (field, value) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex] = {
      ...updatedSlides[currentSlideIndex],
      [field]: value,
    };
    setSlides(updatedSlides);
  };

  const addSlide = () => {
    const newSlide = {
      id: Date.now(),
      title: "New Slide",
      content: "",
    };
    setSlides([...slides, newSlide]);
    setCurrentSlideIndex(slides.length);
  };

  const deleteSlide = (index) => {
    const updatedSlides = slides.filter((_, i) => i !== index);
    setSlides(updatedSlides);
    setCurrentSlideIndex(Math.max(0, index - 1));
  };

  return (
    <SlideContext.Provider
      value={{
        slides,
        currentSlideIndex,
        setCurrentSlideIndex,
        currentSlide,
        updateCurrentSlide,
        addSlide,
        deleteSlide,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};
