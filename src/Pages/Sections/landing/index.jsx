// import React from 'react'
// import "./style.css";
// import Header from '../../../Components/landing/Header';
// import Content from '../../../Components/landing/content';
// import Container from "../../../Components/Container/Container1";
// import SingleCarousel from '../../../Components/Banners';
// const Landing = () => {
//   return (
//     <div className='landing'>
//       <Container>
//         <Header />
// <SingleCarousel/>
//         <Content />
//       </Container>
//     </div>
//   )
// }

// export default Landing;

import React from 'react';
import "./style.css";
import Header from '../../../Components/landing/Header';
import SingleCarousel from '../../../Components/Banners';
const Landing = () => {
  return (
    <div className='landing'>
      <Header />
      <SingleCarousel />
    </div>
  );
};

export default Landing;
