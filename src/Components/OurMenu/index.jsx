import React from 'react';
import "./style.css";

const MenuComponent = ({image, title, subTitle, price}) => {
  return (
    <div className='sub-menu'>
      <div className="info">
        <img src={image} alt="food" />
        <div className='text'>
          <span>{title}</span>
          <span>{subTitle}</span>
        </div>
      </div>
      <div className="price">
        <span></span>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default MenuComponent;