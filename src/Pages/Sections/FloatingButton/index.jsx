import React, {useEffect, useState} from 'react'
import "./style.css";

const FloatingButton = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <>
      {scrollToTop && (
        <button className='floatBtn' onClick={scrollUp}><i class="fa-solid fa-angle-up"></i></button>
      )}
    </>
  )
}

export default FloatingButton;