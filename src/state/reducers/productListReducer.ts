import { ActionType } from '../action-types/actionTypes';
import { Action } from '../actions/actionsProducts';
import { ProductsState } from '../interfaces/productInterface';

const initialState: ProductsState = {
  products: [],
  error: null,
  loading: false,
  paginatedProd: [],
  categorias: [],
};
export const productListReducer = (
  state: ProductsState = initialState,
  action: Action
): ProductsState => {
  switch (action.type) {
    case ActionType.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case ActionType.PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case ActionType.PRODUCT_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ActionType.PAGINATE_PRODUCTS:
      return { ...state, paginatedProd: action.payload, loading: false };
    case ActionType.PAGINATE_PRODUCTS_SEARCH:
      return { ...state, paginatedProd: action.payload, loading: false };
    case ActionType.CATEGORIAS:
      return { ...state, categorias: action.payload };
    default:
      return state;
  }
};
