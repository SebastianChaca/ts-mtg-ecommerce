import { ActionType } from '../action-types/actionTypes';

interface LOGIN {
  type: ActionType.LOGIN;
  payload: { usernameResponse: string; jwt: string };
}
interface LOGOUT {
  type: ActionType.LOGOUT;
}
interface LOGIN_REQUEST {
  type: ActionType.LOGIN_REQUEST;
}
interface LOGIN_REQUEST_FINISH {
  type: ActionType.LOGIN_REQUEST_FINISH;
}

export type ActionLogin = LOGIN | LOGOUT | LOGIN_REQUEST | LOGIN_REQUEST_FINISH;
