import StripeCheckout from 'react-stripe-checkout';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { orderedProducts } from '../store/script';
import { useDispatch } from 'react-redux';
import { ubdateProduct } from '../store/script';
import { useNavigate } from 'react-router-dom';
const Strip = () => {
  const dispatch = useDispatch();
  const navigat = useNavigate();
  const totalAmount =
    useSelector(({ users }) => users.curentUser.cart.totalPrice) * 100;
  console.log(totalAmount);
  const orderedProduct = useSelector(
    ({ users }) => users.curentUser.cart.prodects
  );
  const ordered = useSelector(
    ({ users }) => users.curentUser.cart.orderProdect
  );
  const stripToken = (token) => {
    console.log(token);
    if (token) {
      dispatch(orderedProducts(orderedProduct));
      // console.log(orderedProduct);
      // console.log(ordered);
      dispatch(ubdateProduct());
      // console.log(orderedProduct);
      // console.log(ordered);
      navigat('/root');
    }
  };
  return (
    <StripeCheckout
      name="Nandu Products"
      token={stripToken}
      currency="Inr"
      amount={totalAmount}
      stripeKey="pk_test_51NTRFhSEz7snxSOnCSBzmMVfkxMDCixMMEtcepxIJpuBj0gC93uGuoHnpZp2jFwIZijMVmc1QzSqYQMQkG7RScrh0035sTMkPN"
    />
  );
};
export default Strip;
