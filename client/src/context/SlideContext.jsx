import { createContext, useContext } from "react";

export const SlideContext = createContext();

export const useSlideContext = () => useContext(SlideContext);
