import { ActionType } from '../action-types/actionTypes';
import { Cart } from '../interfaces/cartInterfaces';

export const addItem = (cart: Cart) => {
  return { type: ActionType.CART_ADD_ITEM, payload: cart };
};

export const increase = (id: string) => {
  return { type: ActionType.INCREASE, payload: id };
};
export const decrease = (id: string) => {
  return { type: ActionType.DECREASE, payload: id };
};
export const removeBtn = (id: string) => {
  return { type: ActionType.CART_REMOVE_ITEM, payload: id };
};
export const checkoutMode = () => {
  return { type: ActionType.CHECKOUT };
};
export const checkoutModeOff = () => {
  return { type: ActionType.CHECKOUT_OFF };
};
export const cartMercadoPago = () => {
  return { type: ActionType.RECARGO_MERCADO_PAGO };
};
export const cartTotal = () => {
  return { type: ActionType.CART_TOTAL };
};
export const cartTotalRecargo = () => {
  return { type: ActionType.CART_TOTAL_RECARGO };
};
export const clearCart = () => {
  return { type: ActionType.CLEAR_CART };
};
export const clearCartRecargo = () => {
  return { type: ActionType.CLEAR_CART_RECARGO };
};
