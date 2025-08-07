import React, { createContext, useContext, useEffect, useState } from "react"
import io from "socket.io-client"

const SlideContext = createContext()
const socket = io("http://localhost:3000")

export function SlideProvider({ children }) {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    socket.on("slideChanged", (index) => {
      setSlideIndex(index)
    })

    return () => {
      socket.off("slideChanged")
    }
  }, [])

  const changeSlide = (index) => {
    setSlideIndex(index)
    socket.emit("changeSlide", index)
  }

  return (
    <SlideContext.Provider value={{ slideIndex, changeSlide }}>
      {children}
    </SlideContext.Provider>
  )
}

export function useSlide() {
  return useContext(SlideContext)
}
