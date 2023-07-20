import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import orderedProduct from '../stripPayment/OrderProdects';
import { ubdateCurentUser } from '../store/script';
const UserProfile = () => {
  const cartList = useSelector(
    ({ users }) => users.curentUser.cart.orderProdect
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const curentUser = useSelector(({ users }) => users.curentUser.name);
  const curentAddress = useSelector(({ users }) => users.curentUser);
  // const totalAmount = cartList
  //   .map((item) => item.totalPrice)
  //   .reduce((acc, cur) => acc + cur, 1);
  // const totalQuantity = cartList
  //   .map((item) => item.totalQuantity)
  //   .reduce((acc, cur) => acc + cur, 1);
  const logoutHandler = () => {};
  return (
    <div className="userprofile">
      <div className="order">
        <div className="user-name">
          <h3>Hi {curentUser}</h3>
          <p
            className="mob"
            onClick={() => {
              navigate('/root/additem');
            }}
          >
            AddProduct
          </p>
          <button
            onClick={() => {
              // dispatch(orderedProduct({ pro: cartList }));

              navigate('/');
            }}
          >
            Logout
          </button>
        </div>
        {cartList && cartList.length > 0 && curentAddress.cart.addres ? (
          <div className="order-detail">
            <h3>Address</h3>
            <div>
              <h4>{curentUser.name}</h4>
              <p>{curentAddress.cart.addres.email}</p>
              <p>phone number {curentAddress.cart.addres.phone}</p>
              <p>{curentAddress.cart.addres.address}</p>
            </div>
            <div className="order-prodect">
              <h2>Order Prodects</h2>
              {cartList && cartList.length > 0 ? (
                cartList.map((item) => {
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
                <p style={{ textAlign: 'center', margin: '20px' }}>
                  No Cart Prodects
                </p>
              )}
            </div>
          </div>
        ) : (
          <p>
            Your order is empty please{' '}
            <Link to="/root" style={{ color: 'blue', textDecoration: 'none' }}>
              purchase
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};
export default UserProfile;
