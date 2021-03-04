import { ActionType } from '../action-types/actionTypes';
import { URL } from '../../utils/url';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionCheckout } from '../actions/actionCheckout';
import { AlertAction } from '../../state/actions/actionAlert';
import { Cart } from '../interfaces/cartInterfaces';

export const metodoPago = (metodo: string) => {
  return { type: ActionType.METODO_DE_PAGO, payload: metodo };
};
export const formaEnvio = (forma: string) => {
  return { type: ActionType.FORMA_DE_ENVIO, payload: forma };
};
export const checkOutMode = () => {
  return { type: ActionType.CHECKOUT };
};
export const clearCartAction = () => {
  return { type: ActionType.CLEAR_CART };
};
export const clearMercadoPagoLink = () => {
  return { type: ActionType.BORRAR_LINK_MP };
};
export const redirect = (link: string) => {
  return { type: ActionType.REDIRECT, payload: link };
};
export const redirectNull = () => {
  return { type: ActionType.REDIRECT_NULL, payload: null };
};
export const crearCompra = (
  token: string,
  items: Cart[],
  total: number,
  metodoPago: string | null,
  formaEnvio: string | null,
  numeroCompra: number,
  linkMP: string | null
) => async (dispatch: Dispatch<ActionCheckout | AlertAction>) => {
  try {
    dispatch({ type: ActionType.CREAR_COMPRA_REQUEST });
    if (metodoPago === 'Mercado Pago') {
      const response = await axios.post(
        `${URL}/orders`,
        {
          items,
          total,
          metodoPago,
          formaEnvio,
          numeroCompra,
          linkMP,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      dispatch({ type: ActionType.CREAR_LINK_MP, payload: data });
    } else {
      const response = await axios.post(
        `${URL}/orders`,
        {
          items,
          total,
          metodoPago,
          formaEnvio,
          numeroCompra,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      dispatch({ type: ActionType.CREAR_COMPRA, payload: data.id });
      dispatch({ type: ActionType.REDIRECT, payload: '/efectivo' });
    }
  } catch (error) {
    dispatch({
      type: ActionType.ALERT_DANGER,
      payload: 'Se produjo un error, por favor intente nuevamente',
    });
  }
  dispatch({ type: ActionType.CREAR_COMPRA_REQUEST_FINISHED });
};
