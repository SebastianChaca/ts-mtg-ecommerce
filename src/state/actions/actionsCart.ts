import { ActionType } from '../action-types/actionTypes';
import { Cart } from '../interfaces/cartInterfaces';
interface CART_ADD_ITEM {
  type: ActionType.CART_ADD_ITEM;
  payload: Cart;
}
interface CART_REMOVE_ITEM {
  type: ActionType.CART_REMOVE_ITEM;
  payload: string;
}
interface CART_TOTAL {
  type: ActionType.CART_TOTAL;
}
interface CART_TOTAL_RECARGO {
  type: ActionType.CART_TOTAL_RECARGO;
}
interface INCREASE {
  type: ActionType.INCREASE;
  payload: string;
}

interface DECREASE {
  type: ActionType.DECREASE;
  payload: string;
}
interface RECARGO_MERCADO_PAGO {
  type: ActionType.RECARGO_MERCADO_PAGO;
}
interface CLEAR_CART {
  type: ActionType.CLEAR_CART;
}
interface CLEAR_CART_RECARGO {
  type: ActionType.CLEAR_CART_RECARGO;
}
interface CHECKOUT_OFF {
  type: ActionType.CHECKOUT_OFF;
}
interface CHECKOUT {
  type: ActionType.CHECKOUT;
}
export type ActionCart =
  | CART_ADD_ITEM
  | CART_REMOVE_ITEM
  | CART_TOTAL
  | INCREASE
  | DECREASE
  | RECARGO_MERCADO_PAGO
  | CLEAR_CART
  | CHECKOUT
  | CHECKOUT_OFF
  | CART_TOTAL_RECARGO
  | CLEAR_CART_RECARGO;
