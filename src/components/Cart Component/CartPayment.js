import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useNavigation } from 'react-router-dom';
const CartPayment = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const totalPrice = useSelector(
    ({ users }) => users.curentUser.cart.totalPrice
  );
  console.log(totalPrice);
  const paymentHandler = () => {
    if (totalPrice) {
      navigate('/root/payment');
    } else {
      setErr(true);
    }
  };
  return (
    <div className="cartpayment">
      <div className="subtotal">
        <h4>SubTotal</h4>
        <h2>$ {totalPrice} </h2>
      </div>
      <div className="shipping">
        <h4>Shipping</h4>
        <p>
          Transit time is based on your chosen shipping speed. We calculate
          transit time using business days. Saturday and Sunday don't usually
          count toward the transit time.
        </p>
      </div>
      <div className="underline"></div>
      <div className="total">
        <div>
          <p>Total Amount</p>
          <h3>${totalPrice}</h3>
        </div>
        <div className="payment">
          <button onClick={paymentHandler}>Proceed to checkout</button>
          {err && <p>Your Cart is Empty!</p>}
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
