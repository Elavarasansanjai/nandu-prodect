import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Prodect from '../prodects/prodect';
import { useDispatch } from 'react-redux';
import { adData } from '../store/script';
import { homeData } from '../homeData';
const ProdectDetail = ({ name, detail, price }) => {
  const dispatch = useDispatch();
  const relatedItem = useSelector((state) => state.selectProdect.curentItem);
  const checkrelatedItem = [...homeData, ...relatedItem];
  console.log(checkrelatedItem);
  const params = useParams();
  const prodectId = params.id;

  console.log(params);
  // console.log(prodectId);
  const PickedItem = checkrelatedItem.find((item) => item.id == prodectId);

  console.log(relatedItem);

  console.log(PickedItem);
  const addToCartHandler = () => {
    dispatch(
      adData({
        id: PickedItem.id,
        detail: PickedItem.PDetail,
        price: PickedItem.PPrice,
        image: PickedItem.PImg,
        name: PickedItem.Pname,
      })
    );
  };
  return (
    <div className="prodectDetail">
      <div className="prodect">
        <h2>Prodect Detail</h2>
        <div>
          <div>
            <img src={PickedItem.PImg}></img>
          </div>

          <div className="contentProdect">
            <div className="datas">
              <div>
                <h2>Name </h2>
              </div>
              <div>
                <h3>{PickedItem.Pname}</h3>
              </div>
            </div>
            <div className="datas">
              <div>
                <h2>Detail </h2>
              </div>
              <div>
                <p>{PickedItem.PDetail}</p>
              </div>
            </div>
            <div className="datas">
              <div>
                <h2>Price </h2>
              </div>
              <div>
                <p>${PickedItem.PPrice}</p>
              </div>
            </div>
            <div className="btn">
              <button onClick={addToCartHandler}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relatedItem">
        <h2>Some Related Items</h2>
        <div className="prodects">
          {checkrelatedItem.map((item) => {
            return (
              <Prodect
                id={item.id}
                name={item.Pname}
                detail={item.PDetail}
                price={item.PPrice}
                image={item.PImg}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProdectDetail;
