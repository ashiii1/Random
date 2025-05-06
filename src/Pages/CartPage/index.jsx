import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price} × {item.quantity}</p>
                <p><strong>Total: ₹{item.price * item.quantity}</strong></p>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Grand Total: ₹{totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
