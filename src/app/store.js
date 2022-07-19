import { combineReducers, createStore } from '@reduxjs/toolkit';
import { cartReduccer } from '../features/header/cartSlice';
import { favoriteReducer } from '../features/header/favoriteSlice';
import { searchReducer } from '../features/header/headerSlice/headerSlice';

export const store = createStore(combineReducers({
  searchValue: searchReducer,
  favorites: favoriteReducer,
  cart: cartReduccer,

}), {
  searchValue: "",
  favorites: [],
  cart: [],
  
});
