import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from '../utils/localStorage';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(
  reducers,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => saveToLocalStorage(store.getState()));
