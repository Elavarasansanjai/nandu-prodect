import React from 'react';
import { useDispatch } from 'react-redux';
import { abdatedItem } from '../store/script';
import { useSelector } from 'react-redux';
import { ItemListJson } from './itemListJson';
const FreshProdectsList = ({ id, item, name }) => {
  const dispatch = useDispatch();
  const Item = useSelector((state) => state.selectProdect.curentItem);

  return (
    <div
      style={{
        backgroundColor: `${
          item === Item ? 'orangered' : 'rgb(233, 233, 233)'
        }`,
      }}
      onClick={() => {
        dispatch(abdatedItem(item));
      }}
    >
      <h4>{name}</h4>
    </div>
  );
};
export default FreshProdectsList;
