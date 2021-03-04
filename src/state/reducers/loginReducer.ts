import { ActionType } from '../action-types/actionTypes';
import { ActionLogin } from '../actions/actionsLogin';

interface LoginState {
  isLogin: boolean;
  loading: boolean;
  username: string | null;
  jwt: string | null;
}
const initialState: LoginState = {
  isLogin: false,
  loading: false,
  username: null,
  jwt: null,
};
export const loginReducer = (
  state: LoginState = initialState,
  action: ActionLogin
) => {
  switch (action.type) {
    case ActionType.LOGIN:
      const { usernameResponse, jwt } = action.payload;
      return { ...state, isLogin: true, username: usernameResponse, jwt: jwt };
    case ActionType.LOGOUT:
      return { isLogin: false, loading: false };
    case ActionType.LOGIN_REQUEST:
      return { ...state, loading: true };
    case ActionType.LOGIN_REQUEST_FINISH:
      return { ...state, loading: false };
    default:
      return state;
  }
};
