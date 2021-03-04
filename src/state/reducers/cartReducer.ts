import { ActionType } from '../action-types/actionTypes';
import { ActionCart } from '../actions/actionsCart';
import { CartState } from '../interfaces/cartInterfaces';
const initialState = {
  cart: [],
  cartRecargo: [],
  quantity: 0,
  total: 0,
  checkoutMode: false,
  totalRecargo: 0,
};

export const cartReducer = (
  state: CartState = initialState,
  action: ActionCart
): CartState => {
  switch (action.type) {
    case ActionType.CART_ADD_ITEM:
      const item = action.payload;
      const itemExist = state.cart.find((x) => x.id === item.id);
      if (itemExist) {
        return state;
      } else {
        return { ...state, cart: [...state.cart, item] };
      }
    case ActionType.CART_TOTAL:
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { unit_price, quantity } = cartItem;
          const itemTotal = unit_price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, quantity };
    case ActionType.INCREASE:
      const newQuantity = state.cart.map((it) => {
        if (it.id === action.payload) {
          if (it.newStock > 0) {
            return {
              ...it,
              quantity: it.quantity + 1,
              newStock: it.newStock - 1,
            };
          } else {
            return { ...it };
          }
        }
        return it; // return it.id === action.payload ? {...it, quantity: it.quantity +1, stock: it.stock -1}: {...it}
      });
      return { ...state, cart: newQuantity };
    case ActionType.DECREASE:
      const newDec = state.cart.map((it) => {
        if (it.id === action.payload) {
          if (it.quantity > 0) {
            return {
              ...it,
              quantity: it.quantity - 1,
              newStock: it.newStock + 1,
            };
          } else {
            return { ...it, quantity: 0 };
          }
        }
        return it;
      });
      return { ...state, cart: newDec };

    case ActionType.CART_REMOVE_ITEM:
      let newCart = state.cart.filter((i) => i.id !== action.payload);
      return { ...state, cart: newCart };
    case ActionType.CHECKOUT:
      return { ...state, checkoutMode: true };
    case ActionType.CHECKOUT_OFF:
      return { ...state, checkoutMode: false };
    case ActionType.RECARGO_MERCADO_PAGO:
      let neww = state.cart.map((item) => {
        let { unit_price } = item;
        unit_price = parseFloat((unit_price * 1.1).toFixed(2));
        return { ...item, unit_price };
      });
      return { ...state, cartRecargo: neww };
    case ActionType.CART_TOTAL_RECARGO:
      let { totalRecargo } = state.cartRecargo.reduce(
        (cartTotal, cartItem) => {
          const { unit_price, quantity } = cartItem;
          const itemTotal = unit_price * quantity;
          cartTotal.totalRecargo += itemTotal;
          cartTotal.quantityRecargo += quantity;
          return cartTotal;
        },
        {
          totalRecargo: 0,
          quantityRecargo: 0,
        }
      );
      totalRecargo = parseFloat(totalRecargo.toFixed(2));
      return { ...state, totalRecargo };
    case ActionType.CLEAR_CART:
      return initialState;
    case ActionType.CLEAR_CART_RECARGO:
      return { ...state, cartRecargo: [], totalRecargo: 0 };
    default:
      return state;
  }
};
