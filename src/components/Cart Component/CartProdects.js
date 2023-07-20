// import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useSelector } from 'react-redux';
import { addData, removeData } from '../store/script';
import { adData } from '../store/script';
import { removData } from '../store/script';
// import CartItem from './cartItem';
// import { json } from 'react-router-dom';
const CartProdects = () => {
  // useEffect(async () => {
  //   const res = await fetch(
  //     'https://sanjeev-dd151-default-rtdb.firebaseio.com/cart.json'
  //   );
  //   const data = JSON.stringify(res);
  //   console.log(data);
  // }, []);
  const cartList = useSelector((state) => state.users.curentUser.cart);
  console.log(cartList);
  const dispatch = useDispatch();
  console.log(cartList);
  return (
    <div>
      {cartList && cartList.prodects.length > 0 ? (
        cartList.prodects.map((item) => {
          return (
            <div key={item.id} className="cartProdect">
              <img src={item.image} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>Quantity</p>
              <div className="quantity-control">
                <p
                  className="plus"
                  onClick={() => {
                    dispatch(
                      adData({
                        id: item.id,
                        name: item.name,
                        detail: item.detail,

                        price: item.price,
                      })
                    );
                  }}
                >
                  +
                </p>
                <p>{item.quantity}</p>
                <p
                  onClick={() => {
                    dispatch(
                      removData({
                        id: item.id,

                        price: item.price,
                      })
                    );
                  }}
                  className="dicrease"
                >
                  -
                </p>
              </div>
              <h3>${item.totalPrice}</h3>
            </div>
          );
        })
      ) : (
        <p style={{ textAlign: 'center', margin: '20px' }}>No Cart Prodects</p>
      )}
    </div>
  );
};

export default CartProdects;
