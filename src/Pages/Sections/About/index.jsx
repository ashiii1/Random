import React from 'react'
import "./style.css";
import AboutContent from '../../../Components/AboutUs/AboutContent';
import AboutImage from '../../../Components/AboutUs/AboutImage';
import ImageSrc from "../../../assest/about-img.png";
import Container from '../../../Components/Container/Container1';

const AboutUs = () => {
  return (
    <div className='about-us' id='about'>
      <Container>
        <div className='parent-div'>
          <AboutContent />
          <AboutImage imageSrc={ImageSrc} imageAlt="food-about-img"/>
        </div>
      </Container>
    </div>
  )
}

export default AboutUs;