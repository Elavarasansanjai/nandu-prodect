import React from 'react';

import Prodect from './prodects/prodect';
import { homeData } from './homeData';
const FreshItems = () => {
  return (
    <div className="freshItems">
      <div className="freshContainer">
        <h2>Our fresh & Healthy Fruits</h2>
        <div className="underline"></div>
      </div>
      <div className="fruitsContainer">
        {homeData.map((item) => {
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
  );
};

export default FreshItems;
