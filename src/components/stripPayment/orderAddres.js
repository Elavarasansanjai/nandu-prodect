import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addAddress } from '../store/script';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { orderedProducts } from '../store/script';
import { ubdateProduct } from '../store/script';
const OrderAddress = () => {
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigat = useNavigate();
  const totalAmount =
    useSelector(({ users }) => users.curentUser.cart.totalPrice) * 100;
  console.log(totalAmount);
  const orderedProduct = useSelector(
    ({ users }) => users.curentUser.cart.prodects
  );
  const addres = useSelector(({ users }) => users.curentUser.cart.addres);
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const address = e.target[3].value;

    const checkaName = isNaN(name.split('')[0]);
    checkaName && email && phone.length === 10 && address.length > 10
      ? setErr(false)
      : setErr(true);
    console.log(phone.length);
    if (checkaName && email && phone.length === 10 && address.length > 10) {
      dispatch(
        addAddress({
          name,
          email,
          phone,
          address,
        })
      );
    } else {
      setErr(true);
    }
  };
  const stripToken = (token) => {
    console.log(token);
    if (token) {
      dispatch(
        orderedProducts({
          pro: orderedProduct,
          quan: 0,
          total: 0,
          empty: [],
          address: addres,
        })
      );
      // console.log(orderedProduct);
      // console.log(ordered);
      // dispatch(ubdateProduct({ empty: [] }));
      // console.log(orderedProduct);
      // console.log(ordered);
      navigat('/root');
    }
  };
  return (
    <div className="orederAddres">
      <form onSubmit={submitHandler} className="formcontainer">
        <h2>Shipping Address</h2>
        <div>
          <label>Name</label>
          <input required type="text" placeholder="Name" />
        </div>
        <div>
          <label>Email</label>
          <input required type="email" placeholder="Email" />
        </div>
        <div>
          <label>Phone</label>
          <input required type="number" placeholder="Phone Number" />
        </div>
        <div className="mob">
          <label>Address</label>
          <textarea placeholder="Enter Your Address" />
        </div>
        {/* <button>Make Payment ${totalAmount}</button> */}
        {!err && (
          <StripeCheckout
            name="Nandu Products"
            token={stripToken}
            currency="Inr"
            amount={totalAmount}
            stripeKey="pk_test_51NTRFhSEz7snxSOnCSBzmMVfkxMDCixMMEtcepxIJpuBj0gC93uGuoHnpZp2jFwIZijMVmc1QzSqYQMQkG7RScrh0035sTMkPN"
          />
        )}
        {err && (
          <p style={{ color: 'red', fontSize: '13px' }}>
            something went wrong please check input value
          </p>
        )}
      </form>
    </div>
  );
};

export default OrderAddress;
