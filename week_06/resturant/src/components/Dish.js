// src/components/Dish.js
import React from 'react';

function Dish({ dish, addToCart }) {
  return (
    <div className="dish">
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p>${dish.price}</p>
      <button onClick={() => addToCart(dish)}>Add to Cart</button>
    </div>
  );
}

export default Dish;
