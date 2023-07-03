import React from 'react'
import "./style.css";
import RATES_DATA from "../../../mock/rates";
import RatesComponent from '../../../Components/Rates';
import Container from '../../../Components/Container/Container1';

const Rates = () => {
  return (
    <div className='rates'>
      <Container>
        <div className="rate-boxs">
          {
            RATES_DATA.map(({id, image, rate, type}) => (
              <RatesComponent key={id} image={image} rate={rate} type={type} />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Rates;