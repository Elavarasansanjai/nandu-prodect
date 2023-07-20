import React from 'react';
import OrderProdects from './OrderProdects';
import OrderAddress from './orderAddres';

const StripPayment = () => {
  return (
    <div className="strippayment">
      <div className="order-prodect-container">
        <OrderProdects />
      </div>
      <div>
        <OrderAddress />
      </div>
    </div>
  );
};

export default StripPayment;
