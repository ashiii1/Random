// src/pages/FoodMenu.jsx
import React from 'react';
import FoodCard from '../../Components/FoodCard/FoodCard';
import { foodItems } from '../../mock/all';
import './FoodMenu.css';

const FoodMenu = () => {
  return (
    <div className="food-menu">
      {foodItems.map(food => (
        <FoodCard key={food.id} {...food} />
      ))}
    </div>
  );
};

export default FoodMenu;
