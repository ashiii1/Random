import React from 'react'
import "./style.css";

const RatesComponent = ({image, rate, type}) => {
  return (
    <div className='rate'>
      <img src={image} alt="icon" />
      <div className="info">
        <span>{rate}</span>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default RatesComponent;