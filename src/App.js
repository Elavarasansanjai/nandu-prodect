import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './style.scss';
import React, { useEffect } from 'react';
import ProdectDetail from './components/ProdectDetail/prodectDetail';
import Cart from './components/Cart Component/Cart';
import IndexPage from './indexPage';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import RootLayout from './components/RootLayout';
// import { changeData } from './components/store/script';
import { useDispatch } from 'react-redux';
import Form from './components/adminFormData/form';
import {
  abdateCurentUser,
  abdateProdect,
  abdateStatus,
} from './components/store/script';
import { changeData } from './components/store/script';
import SignIn from './components/signIn';
import LogIn from './components/login';
import { abdateUser } from './components/store/script';
import StripPayment from './components/stripPayment/striipPayment';
import Strip from './components/stripPayment/stripe';
import UserProfile from './components/userProfile/userProfile';

const router = createBrowserRouter([
  { path: '/', element: <SignIn /> },
  { path: '/login', element: <LogIn /> },

  {
    path: '/root',
    element: <RootLayout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'cart', element: <Cart /> },
      { path: 'additem', element: <Form /> },
      { path: 'prodectdetail/:id', element: <ProdectDetail /> },
      { path: 'payment', element: <StripPayment /> },
      { path: 'strip', element: <Strip /> },
      { path: 'profile', element: <UserProfile /> },
    ],
  },
]);
const App = () => {
  // console.log(useSelector(({ users }) => users.curentUser.cart.addres));
  const userDispatch = useDispatch();
  const prodectDispatch = useDispatch();
  const cartDispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const curentUser = useSelector((state) => state.users.curentUser);
  console.log(users);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://sanjeev-dd151-default-rtdb.firebaseio.com/cart.json'
        );

        if (!res.ok) {
          console.log('err');
        }
        const data = await res.json();
        console.log(data);
        prodectDispatch(abdateProdect(data));
      } catch {
        console.log('err');
      }
    };
    fetchData();
  }, [prodectDispatch]);

  // useEffect(() => {
  //   const sendData = async () => {
  //     try {
  //       const data = await fetch(
  //         'https://sanjeev-dd151-default-rtdb.firebaseio.com/cart.json',
  //         {
  //           method: 'PUT',
  //           body: JSON.stringify(Prodecs),
  //         }
  //       );
  //       if (!data.ok) {
  //         console.log('eroor');
  //       }
  //     } catch {
  //       console.log('err');
  //     }
  //   };
  //   sendData();
  // }, [Prodecs]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://sanjeev-dd151-default-rtdb.firebaseio.com/prodectcart.json'
        );

        if (!res.ok) {
          console.log('err');
        }
        const data = await res.json();
        console.log(data.name);

        cartDispatch(abdateUser(data.name));

        // userDispatch(abdateCurentUser(getCurentUser));
      } catch {
        console.log('err');
      }
    };
    fetchData();
  }, [cartDispatch]);
  // const getCurentUser = JSON.parse(localStorage.getItem('curentuser'));

  useEffect(() => {
    const sendData = async () => {
      try {
        const res = await fetch(
          'https://sanjeev-dd151-default-rtdb.firebaseio.com/prodectcart.json',
          {
            body: JSON.stringify({ name: users }),
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
            },
          }
        );

        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    sendData();
  }, [users]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
