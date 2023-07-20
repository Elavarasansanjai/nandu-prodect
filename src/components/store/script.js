import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { ItemListJson } from '../prodects/itemListJson';
import { Storage } from 'redux-persist/lib/types';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import sessionStorage from 'redux-persist/es/storage/session';
const errSlice = createSlice({
  name: 'status',
  initialState: { status: '' },
  reducers: {
    abdateStatus(state, action) {
      state.status = action.payload;
    },
  },
});
const usersSlice = createSlice({
  name: 'users',
  initialState: { curentUser: {}, users: [], message: '' },
  reducers: {
    abdateUser(state, action) {
      // console.log(action.payload);
      state.users = action.payload;
    },
    abdateCurentUser(state, action) {
      state.curentUser = action.payload;
    },
    signIn(state, action) {
      const newUser = action.payload;
      const existingUser = state.users.find(
        (user) => user.name === newUser.name
      );
      if (!existingUser) {
        state.users.push({
          name: newUser.name,
          passWord: newUser.passWord,
          cart: {
            totalQuantity: 0,
            prodects: [],
            orderProdect: [],
            addres: {},
            totalPrice: 0,
          },
        });
        const curentAccount = state.users.find(
          (item) => item.name === newUser.name
        );
        state.curentUser = curentAccount;
      } else {
        return state;
        // state.message = 'user already exists';
      }
    },
    ubdateCurentUser(state, action) {
      state.curentUser = action.payload;
    },
    orderedProducts(state, action) {
      state.curentUser.cart.orderProdect = action.payload.pro;

      state.curentUser.cart.totalQuantity = action.payload.quan;
      state.curentUser.cart.prodects = [];
      state.curentUser.cart.totalPrice = action.payload.total;

      const existingUser = state.users.find(
        (item) => item.name === state.curentUser.name
      );
      existingUser.cart = state.curentUser.cart;
      state.users = [...state.users];
    },
    ubdateProduct(state, action) {
      state.curentUser.cart.prodects = action.payload.empty;
    },
    addAddress(state, action) {
      const address = action.payload;
      state.curentUser.cart.addres = address;
    },
    login(state, action) {
      const newUser = action.payload;
      const existingUser = state.users.find(
        (user) => user.name === newUser.name
      );
      if (
        newUser.passWord === existingUser.passWord &&
        newUser.name === existingUser.name
      ) {
        const curentAccount = state.users.find(
          (item) => item.name === newUser.name
        );
        state.curentUser = curentAccount;
      } else {
        state.message = 'name or password is wrong';
      }
    },
    adData(state, action) {
      console.log(action.payload);
      const newItem = action.payload;

      state.curentUser.cart.totalQuantity++;
      const existingItem = state.curentUser.cart.prodects.find(
        (item) => item.id === newItem.id
      );

      console.log(existingItem);
      const existingUser = state.users.find(
        (item) => item.name === state.curentUser.name
      );
      if (!existingItem) {
        state.curentUser.cart.prodects.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          detail: newItem.detail,
          quantity: 1,
          image: newItem.image,
          totalPrice: Number(newItem.price),
        });
        state.curentUser.cart.totalPrice = state.curentUser.cart.prodects
          ? state.curentUser.cart.prodects
              .map((item) => Number(item.totalPrice))
              .reduce((acc, cur) => acc + cur, 0)
          : 0;

        existingUser.cart = state.curentUser.cart;

        state.users = [...state.users];
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
        state.curentUser.cart.totalPrice = state.curentUser.cart.prodects
          ? state.curentUser.cart.prodects
              .map((item) => Number(item.totalPrice))
              .reduce((acc, cur) => acc + cur, 0)
          : 0;
        // state.totalPrice = state.prodects
        //   .map((item) => item.totalPrice)
        //   .reduce((acc, cur) => acc + cur);
        // console.log(state.totalPrice);
        existingUser.cart = state.curentUser.cart;

        state.users = [...state.users];
      }
    },
    removData: (state, action) => {
      const newItem = action.payload;
      state.curentUser.cart.totalQuantity--;
      const existingItem = state.curentUser.cart.prodects.find(
        (item) => item.id === newItem.id
      );
      if (existingItem.quantity === 1) {
        state.curentUser.cart.prodects = state.curentUser.cart.prodects.filter(
          (item) => item.id !== newItem.id
        );
        state.curentUser.cart.totalPrice = state.curentUser.cart.prodects
          ? state.curentUser.cart.prodects
              .map((item) => Number(item.totalPrice))
              .reduce((acc, cur) => acc + cur, 0)
          : 0;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(newItem.price);
        state.curentUser.cart.totalPrice = state.curentUser.cart.prodects
          ? state.curentUser.cart.prodects
              .map((item) => Number(item.totalPrice))
              .reduce((acc, cur) => acc + cur, 0)
          : 0;
      }
    },
  },
});
console.log(Number('2'));
const prodectSlice = createSlice({
  name: 'ProdectItem',
  initialState: { curentItem: [] },
  reducers: {
    abdatedItem: (state, action) => {
      state.curentItem = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: { prodects: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    changeData(state, action) {
      state.prodects = action.payload.prodects;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
    addData(state, action) {
      console.log(action.payload);
      const newItem = action.payload;
      state.totalQuantity++;
      const existingItem = state.prodects.find(
        (item) => item.id === newItem.id
      );

      console.log(existingItem);

      if (!existingItem) {
        state.prodects.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          detail: newItem.detail,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalPrice = state.prodects
          ? state.prodects
              .map((item) => item.totalPrice)
              .reduce((acc, cur) => acc + cur, 0)
          : 0;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.totalPrice = state.prodects
          ? state.prodects
              .map((item) => item.totalPrice)
              .reduce((acc, cur) => acc + cur, 0)
          : 0;
        // state.totalPrice = state.prodects
        //   .map((item) => item.totalPrice)
        //   .reduce((acc, cur) => acc + cur);
        // console.log(state.totalPrice);
      }
    },
    removeData: (state, action) => {
      const newItem = action.payload;
      state.totalQuantity--;
      const existingItem = state.prodects.find(
        (item) => item.id === newItem.id
      );
      if (existingItem.quantity === 1) {
        state.prodects = state.prodects.filter(
          (item) => item.id !== newItem.id
        );
        state.totalPrice = state.prodects
          ? state.prodects
              .map((item) => item.totalPrice)
              .reduce((acc, cur) => acc + cur, 0)
          : 0;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - newItem.price;
        state.totalPrice = state.prodects
          ? state.prodects
              .map((item) => item.totalPrice)
              .reduce((acc, cur) => acc + cur, 0)
          : 0;
      }
    },
  },
});

const AdminProdectSlice = createSlice({
  initialState: { prodect: [] },
  name: 'prodects',
  reducers: {
    addProdect(state, action) {
      const newProdect = action.payload;
      const existingItem = state.prodect.find(
        (item) => item.itemName === newProdect.itemName
      );
      if (!existingItem) {
        state.prodect.push({
          itemName: newProdect.itemName,
          items: [
            {
              id: Math.random(),
              Pname: newProdect.Pname,
              PDetail: newProdect.PDetail,
              PPrice: newProdect.PPrice,
              PImg: newProdect.PImg,
            },
          ],
        });
      } else {
        existingItem.items.push({
          id: Math.random(),
          Pname: newProdect.Pname,
          PPrice: newProdect.PPrice,
          PImg: newProdect.PImg,
          PDetail: newProdect.PDetail,
        });
        state.prodect = [...state.prodect];
      }
    },
    abdateProdect(state, action) {
      const abdatedItem = action.payload;
      state.prodect = abdatedItem;
    },
  },
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducer = combineReducers({
  selectProdect: prodectSlice.reducer,

  cart: cartSlice.reducer,
  prodect: AdminProdectSlice.reducer,
  users: usersSlice.reducer,
  status: errSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const { abdateStatus } = errSlice.actions;
export const { abdatedItem } = prodectSlice.actions;
export const { changeData, addData, removeData } = cartSlice.actions;
export const { addProdect, abdateProdect } = AdminProdectSlice.actions;
export const {
  signIn,
  abdateUser,
  login,
  adData,
  removData,
  abdateCurentUser,
  addAddress,
  orderedProducts,
  ubdateProduct,
  ubdateCurentUser,
} = usersSlice.actions;
