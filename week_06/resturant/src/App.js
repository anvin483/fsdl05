// src/App.js
import React, { useState } from 'react';
import './App.css';
import DishList from './components/DishList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const dishes = [
    { id: 1, name: 'Pizza Margherita', description: 'Classic pizza with tomato, mozzarella, and basil.', price: 10 },
    { id: 2, name: 'Spaghetti Carbonara', description: 'Pasta with eggs, cheese, pancetta, and pepper.', price: 12 },
    { id: 3, name: 'Caesar Salad', description: 'Lettuce, croutons, parmesan cheese, and Caesar dressing.', price: 7 },
    { id: 4, name: 'Burger & Fries', description: 'Juicy beef burger with a side of crispy fries.', price: 8 },
    { id: 5, name: 'Tiramisu', description: 'Italian dessert made of layers of coffee-soaked ladyfingers and mascarpone cream.', price: 5 },
  ];

  const addToCart = (dish) => {
    setCart([...cart, dish]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="App">
      <h1>Restaurant Menu</h1>
      <DishList dishes={dishes} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} totalPrice={getTotalPrice} />
    </div>
  );
}

export default App;
