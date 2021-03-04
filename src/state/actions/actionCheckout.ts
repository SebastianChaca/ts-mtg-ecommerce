import { ActionType } from '../action-types/actionTypes';

interface METODO_DE_PAGO {
  type: ActionType.METODO_DE_PAGO;
  payload: string;
}
interface FORMA_DE_ENVIO {
  type: ActionType.FORMA_DE_ENVIO;
  payload: string;
}
interface CREAR_LINK_MP {
  type: ActionType.CREAR_LINK_MP;
  payload: string;
}
interface BORRAR_LINK_MP {
  type: ActionType.BORRAR_LINK_MP;
}
interface CREAR_COMPRA {
  type: ActionType.CREAR_COMPRA;
  payload: number;
}
interface CREAR_COMPRA_REQUEST {
  type: ActionType.CREAR_COMPRA_REQUEST;
}
interface CREAR_COMPRA_REQUEST_FINISHED {
  type: ActionType.CREAR_COMPRA_REQUEST_FINISHED;
}
interface NUMERO_COMPRA {
  type: ActionType.NUMERO_COMPRA;
  payload: number;
}
interface COMPRA_AUTH_TRUE {
  type: ActionType.COMPRA_AUTH_TRUE;
}
interface COMPRA_AUTH_FALSE {
  type: ActionType.COMPRA_AUTH_FALSE;
}
interface CLEAR_CHECKOUT {
  type: ActionType.CLEAR_CHECKOUT;
}
interface REDIRECT {
  type: ActionType.REDIRECT;
  payload: string;
}
interface REDIRECT_NULL {
  type: ActionType.REDIRECT_NULL;
  payload: null;
}
export type ActionCheckout =
  | METODO_DE_PAGO
  | FORMA_DE_ENVIO
  | CREAR_LINK_MP
  | BORRAR_LINK_MP
  | CREAR_COMPRA
  | CREAR_COMPRA_REQUEST
  | CREAR_COMPRA_REQUEST_FINISHED
  | NUMERO_COMPRA
  | COMPRA_AUTH_TRUE
  | COMPRA_AUTH_FALSE
  | CLEAR_CHECKOUT
  | REDIRECT
  | REDIRECT_NULL;
