import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import  cartReducer from './cart-reducer';

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

export const rootReducer = combineReducers(allReducers);