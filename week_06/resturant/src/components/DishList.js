// src/components/DishList.js
import React from 'react';
import Dish from './Dish';

function DishList({ dishes, addToCart }) {
  return (
    <div className="dish-list">
      <h2>Our Dishes</h2>
      <div className="dishes">
        {dishes.map(dish => (
          <Dish key={dish.id} dish={dish} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default DishList;
