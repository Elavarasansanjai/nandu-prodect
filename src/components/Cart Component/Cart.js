import React from 'react';
import CartProdects from './CartProdects';
import CartPayment from './CartPayment';
const Cart = () => {
  return (
    <div className="cart">
      <div className="cartProdects">
        <h2>Your Cart</h2>
        <CartProdects />
      </div>

      <CartPayment />
    </div>
  );
};
export default Cart;
