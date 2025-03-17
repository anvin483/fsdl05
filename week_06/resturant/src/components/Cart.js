// src/components/Cart.js
import React from 'react';

function Cart({ cart, removeFromCart, totalPrice }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${totalPrice()}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
