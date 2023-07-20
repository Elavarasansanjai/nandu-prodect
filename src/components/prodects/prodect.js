import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';

import { useDispatch } from 'react-redux';

import { adData } from '../store/script';
// import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useSelector } from 'react-redux';
import { Link, redirect } from 'react-router-dom';
const Prodect = ({ id, name, price, detail, image }) => {
  const dispatch = useDispatch();
  const itiem = useSelector((state) => state.cart.prodects);
  const selectProdect = () => {
    console.log(id, name, price, detail);
    dispatch(
      adData({
        name,
        price,
        detail,
        id,
        image,
      })
    );
    console.log(itiem);
  };
  const state = {
    id: id,
    Pname: name,
    PImg: image,
    PDetail: detail,
    PPrice: price,
  };
  return (
    <Link to={`/root/prodectdetail/${id}`} style={{ textDecoration: 'none' }}>
      <div
        style={{ textDecoration: 'none' }}
        className="fruits"
        onClick={() => redirect('/root/prodectdetail')}
      >
        <div className="f-img">
          <div>
            <img className="img" src={image} />
          </div>
          <div onClick={selectProdect}>
            <h2 className="cart-icon">
              <MdShoppingBasket />
            </h2>
          </div>
        </div>
        <sub>
          <h3 style={{ textDecoration: 'none' }}>{name}</h3>
          <p style={{ textDecoration: 'none' }}>{detail}</p>
          <h5 style={{ textDecoration: 'none' }}>
            <span style={{ textDecoration: 'none' }}>$</span>
            {price}
          </h5>
        </sub>
      </div>
    </Link>
  );
};

export default Prodect;
