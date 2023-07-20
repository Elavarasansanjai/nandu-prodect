import React from 'react';
import { useDispatch } from 'react-redux';
import { addData } from '../store/script';
const CartItem = ({ name, id, quantity, totalPrice, price, detail }) => {
  const dispatch = useDispatch();
  return (
    <div key={id} className="cartProdect">
      <img src=""></img>
      <p>{name}</p>
      <p>${price}</p>
      <p>Quantity</p>
      <p
        className="plus"
        onClick={() => {
          dispatch(
            addData({
              id,
              name,
              detail,

              price,
            })
          );
        }}
      >
        +
      </p>
      <p>{quantity}</p>
      <p className="dicrease">-</p>
      <h3>${totalPrice}</h3>
    </div>
  );
};
export default CartItem;
