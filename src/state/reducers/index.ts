import { combineReducers } from 'redux';
import { productListReducer } from './productListReducer';
import { cartReducer } from './cartReducer';
import { loginReducer } from './loginReducer';
import { alertReducer } from './alertReducer';
import { sidebarReducer } from './sidebarRecucer';
import { checkoutReducer } from './checkoutReducer';
const reducers = combineReducers({
  products: productListReducer,
  cart: cartReducer,
  login: loginReducer,
  alert: alertReducer,
  sidebar: sidebarReducer,
  checkout: checkoutReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
