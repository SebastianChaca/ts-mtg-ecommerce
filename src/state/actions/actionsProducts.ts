import { ActionType } from '../action-types/actionTypes';
import { Product } from '../interfaces/productInterface';

interface PRODUCT_LIST_REQUEST {
  type: ActionType.PRODUCT_LIST_REQUEST;
}
interface PRODUCT_LIST_SUCCESS {
  type: ActionType.PRODUCT_LIST_SUCCESS;
  payload: Product[];
}
interface PRODUCT_LIST_ERROR {
  type: ActionType.PRODUCT_LIST_ERROR;
  payload: string;
}
interface PAGINATE_PRODUCTS {
  type: ActionType.PAGINATE_PRODUCTS;
  payload: Product[][];
}
interface PAGINATE_PRODUCTS_SEARCH {
  type: ActionType.PAGINATE_PRODUCTS_SEARCH;
  payload: Product[][];
}
interface CATEGORIAS {
  type: ActionType.CATEGORIAS;
  payload: string[];
}
export type Action =
  | PRODUCT_LIST_REQUEST
  | PRODUCT_LIST_SUCCESS
  | PRODUCT_LIST_ERROR
  | PAGINATE_PRODUCTS
  | PAGINATE_PRODUCTS_SEARCH
  | CATEGORIAS;
