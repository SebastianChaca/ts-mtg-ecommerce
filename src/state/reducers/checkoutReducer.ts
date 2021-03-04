import { ActionType } from '../action-types/actionTypes';
import { CheckOut } from '../interfaces/checkoutInterface';
import { ActionCheckout } from '../actions/actionCheckout';
const initialState: CheckOut = {
  metodoPago: null,
  formaEnvio: null,
  mercadoPagoLink: null,
  loading: false,
  compraAtuh: false,
  idCompra: null,
  redirectTo: null,
};
export const checkoutReducer = (
  state = initialState,
  action: ActionCheckout
) => {
  switch (action.type) {
    case ActionType.METODO_DE_PAGO:
      return { ...state, metodoPago: action.payload };
    case ActionType.FORMA_DE_ENVIO:
      return { ...state, formaEnvio: action.payload };
    case ActionType.CREAR_LINK_MP:
      return { ...state, mercadoPagoLink: action.payload };
    case ActionType.BORRAR_LINK_MP:
      return { ...state, mercadoPagoLink: null };
    case ActionType.CREAR_COMPRA:
      return { ...state, idCompra: action.payload };
    case ActionType.CREAR_COMPRA_REQUEST:
      return { ...state, loading: true };
    case ActionType.CREAR_COMPRA_REQUEST_FINISHED:
      return { ...state, loading: false };
    case ActionType.NUMERO_COMPRA:
      return { ...state, numeroCompra: action.payload };
    case ActionType.COMPRA_AUTH_TRUE:
      return { ...state, compraAtuh: true };
    case ActionType.COMPRA_AUTH_FALSE:
      return { ...state, compraAtuh: false };
    case ActionType.CLEAR_CHECKOUT:
      return initialState;
    case ActionType.REDIRECT:
      return { ...state, redirectTo: action.payload };
    case ActionType.REDIRECT_NULL:
      return { ...state, redirectTo: null };
    default:
      return state;
  }
};
