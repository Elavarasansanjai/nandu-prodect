import React from 'react';
import HomePage from './Homepage';

const HomeProdect = ({ Pname, PPrice, PDetail, PImg }) => {
  return (
    <div className="home-prodect">
      <div className="prodect-container">
        <img src={PImg} />
        <h3>{Pname}</h3>

        <p>{PDetail}</p>
        <p>
          <span>$</span>
          {PPrice}
        </p>
      </div>
    </div>
  );
};

export default HomeProdect;
