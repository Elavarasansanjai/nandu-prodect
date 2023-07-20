import React from 'react';
import HotItems from './Hotitems';
import ProdectList from './prodectList';
const HotDishes = () => {
  return (
    <div className="HotDishContainer">
      <div className="freshContainer">
        <h2>Our fresh & Healthy Fruits</h2>
        <div className="underline"></div>
      </div>
      <div className="hotItemContainer">
        <HotItems />
      </div>
      <div className="protectlistcontainer">
        <ProdectList />
      </div>
    </div>
  );
};
export default HotDishes;
