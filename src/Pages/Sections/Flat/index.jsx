import React from 'react'
import "./style.css";
import FlatComponent from '../../../Components/Flat';
import Container from '../../../Components/Container/Container1';

const Flat = () => {
  return (
    <div className='flat'>
      <Container>
        <FlatComponent />
      </Container>
    </div>
  )
}

export default Flat;