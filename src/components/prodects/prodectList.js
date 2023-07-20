import React from 'react';
import Prodect from './prodect';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const ProdectList = () => {
  const Item = useSelector((state) => state.selectProdect.curentItem);
  console.log(Item);
  return (
    <div className="prodectlist">
      {Item.map((item) => {
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
  );
};

export default ProdectList;
