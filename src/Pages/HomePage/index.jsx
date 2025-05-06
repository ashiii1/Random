import React from 'react';
import "./style.css";
import Landing from '../Sections/landing';
import AboutUs from '../Sections/About';
import Speical from '../Sections/Special';
import OurMenu from '../Sections/OurMenu';
import Flat from '../Sections/Flat';
import Cooking from '../Sections/Cooking';
import Rates from '../Sections/Rates';
import Reviews from '../Sections/Reviews';
import Blogs from '../Sections/Blogs';
import Footer from '../Sections/Footer';
import Subscribe from '../Sections/Subscribe';
import CopyRight from '../Sections/CopyRight';
import FloatingButton from '../Sections/FloatingButton';
import FoodMenu from '../FoodPage/FoodPage';

const HomePage = () => {
  return (
    <div>
      <Landing />
      <FloatingButton />
      <AboutUs />
      <Blogs />
      <Speical />
      <FoodMenu/>
      <OurMenu />
      <Flat />
      <Cooking />
      <Rates />
      <Reviews />
      <Footer />
      <Subscribe />
      <CopyRight />
    </div>
  )
}

export default HomePage;