import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './FoodCard.css';

const FoodCard = ({ id, image, name, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="food-card">
      <img src={image} alt={name} className="food-img" />
      <div className="food-info">
        <h3>{name}</h3>
        <p>Price: ₹{price}</p>
        <button onClick={() => addToCart({ id, image, name, price })}>Add to Cart</button>
      </div>
    </div>
  );
};

export default FoodCard;