import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types/actionTypes';
import { Action } from '../actions/actionsProducts';
import { Product } from '../interfaces/productInterface';
import { URL } from '../../utils/url';
import { cleanProducts, paginate, categorias } from '../../utils/helpers';
export const searchProducts = async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get(`${URL}/products`);
    const cleanedProducts = cleanProducts(data);

    dispatch({
      type: ActionType.PRODUCT_LIST_SUCCESS,
      payload: cleanedProducts,
    });
    dispatch({
      type: ActionType.PAGINATE_PRODUCTS,
      payload: paginate(cleanProducts(data)),
    });
    dispatch({
      type: ActionType.CATEGORIAS,
      payload: categorias(data),
    });
  } catch (err) {
    dispatch({
      type: ActionType.PRODUCT_LIST_ERROR,
      payload: err.message,
    });
  }
};
export const filterAction = (products: Product[]) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({
    type: ActionType.PRODUCT_LIST_REQUEST,
  });

  dispatch({
    type: ActionType.PAGINATE_PRODUCTS_SEARCH,
    payload: paginate(products),
  });
};
