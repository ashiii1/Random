// SingleCarousel.js
import React, { useEffect, useState } from 'react';
import './style.css';

const images = [
  require("../../assest/bannermain.png"),
  require("../../assest/bannertwo.png"),
  require("../../assest/bannerthree.png"),
];
const SingleCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="fullscreen-carousel">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
    );
  };
  
  export default SingleCarousel;