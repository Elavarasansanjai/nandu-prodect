import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const OrderProdects = () => {
  const cartList = useSelector((state) => state.users.curentUser.cart);
  console.log(cartList);

  console.log(cartList);
  return (
    <div className="order-prodect">
      <h2>Order Prodects</h2>
      {cartList && cartList.prodects.length > 0 ? (
        cartList.prodects.map((item) => {
          return (
            <div key={item.id} className="cartProdect">
              <img src={item.image} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>Quantity</p>

              <p>{item.quantity}</p>

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

export default OrderProdects;
