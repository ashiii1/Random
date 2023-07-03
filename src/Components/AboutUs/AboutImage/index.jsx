import React from 'react'
import "./style.css";

const AboutImage = ({imageSrc , imageAlt}) => {
  return (
    <div className="about-image">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  )
}

export default AboutImage;