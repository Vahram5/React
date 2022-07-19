import { combineReducers, createStore } from '@reduxjs/toolkit';
import { cartReduccer } from '../features/header/cartSlice';
import { categoriesOpenStatusReducer } from '../features/header/categoriesOpenStatus';
import { favoriteReducer } from '../features/header/favoriteSlice';
import { searchReducer } from '../features/header/headerSlice/headerSlice';
import { submenuStatusReducer } from '../features/header/SubMenuSlice/subMenuSlice';

export const store = createStore(combineReducers({
  searchValue: searchReducer,
  favorites: favoriteReducer,
  cart: cartReduccer,
  submenuStatus: submenuStatusReducer,
  categoriesOpenStatus: categoriesOpenStatusReducer,

}), {
  searchValue: "",
  favorites: [],
  cart: [],
  submenuStatus: false,
  categoriesOpenStatus: false,
  
});
