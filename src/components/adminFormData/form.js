import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProdect } from '../store/script';
import { useSelector } from 'react-redux';
const Form = () => {
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();

  const [productTitle, setTitle] = useState('');
  const [productName, setName] = useState('');
  const [productDetail, setDetail] = useState('');
  const [productPrice, setPrice] = useState('');
  const [productImg, setImg] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const productTitle = e.target[0].value;
    let strRegex = new RegExp(/^[a-z]+$/i);
    let result = strRegex.test(productTitle);
    console.log(result);
    if (!result) {
      setErr(true);
      return;
    }

    setErr(false);
    console.log(productTitle);
    const newProdectData = {
      itemName: productTitle,
      Pname: productName,
      PDetail: productDetail,
      PPrice: productPrice,
      PImg: productImg,
    };

    dispatch(addProdect(newProdectData));
  };
  const ans = useSelector(({ prodect }) => prodect.prodect);
  console.log(ans);
  return (
    <div className="form-container">
      <div>
        <form onSubmit={submitHandler}>
          <h1>Add Prodects</h1>
          <div className="title">
            <label>Prodect Title </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="enter prodect tittle"
              type="text"
              required
            />
          </div>
          <div className="prodects-detail">
            <h1>Enter Prodect Details</h1>
            <div>
              <label>prodect name </label>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="enter prodect name"
                type="text"
                required
              />
            </div>
            <div>
              <label>prodect detail </label>
              <input
                onChange={(e) => setDetail(e.target.value)}
                placeholder="enter prodect detail"
                type="text"
                required
              />
            </div>
            <div>
              <label>prodect price </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                placeholder="enter price"
                type="number"
                required
              />
            </div>
            <div>
              <label>prodect image </label>
              <input
                onChange={(e) => setImg(e.target.value)}
                type="link"
                required
                placeholder="enter image url"
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
            <div>{err && <p>something went wrong please check</p>}</div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
