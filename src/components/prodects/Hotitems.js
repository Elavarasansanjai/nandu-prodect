import React from 'react';
import { ItemListJson } from './itemListJson';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
// import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

import FreshProdectsList from './freshProdectslist';
const HotItems = () => {
  const prodects = useSelector(({ prodect }) => prodect.prodect);
  return (
    <div className="hotItems">
      <div className="items">
        {prodects
          ? prodects.map((item) => {
              return (
                <FreshProdectsList item={item.items} name={item.itemName} />
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default HotItems;
