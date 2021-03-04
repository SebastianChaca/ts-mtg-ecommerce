import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types/actionTypes';
import { ActionLogin } from '../actions/actionsLogin';
import { AlertAction } from '../actions/actionAlert';
import { LoginData } from '../interfaces/loginInterface';
import { URL } from '../../utils/url';

export const login = (identifier: string, password: string) => async (
  dispatch: Dispatch<ActionLogin | AlertAction>
) => {
  try {
    dispatch({ type: ActionType.LOGIN_REQUEST });
    const response = await axios.post(`${URL}/auth/local`, {
      identifier,
      password,
    });
    const { data } = response;
    const usernameResponse: string = data.user.username;
    const jwt: string = data.jwt;
    const msg_succes = `Bienvenido ${data.user.username} !`;

    dispatch({ type: ActionType.LOGIN, payload: { usernameResponse, jwt } });
    dispatch({ type: ActionType.ALERT_SUCCESS, payload: msg_succes });
    dispatch({ type: ActionType.LOGIN_REQUEST_FINISH });
  } catch (err) {
    const msg_danger = 'El nombre de usuario o la contraseña es incorrecta';
    dispatch({ type: ActionType.ALERT_DANGER, payload: msg_danger });
    dispatch({ type: ActionType.LOGIN_REQUEST_FINISH });
  }
};

export const registerUser = ({
  firstName,
  lastName,
  password,
  email,
  username,
}: LoginData) => async (dispatch: Dispatch<ActionLogin | AlertAction>) => {
  try {
    dispatch({ type: ActionType.LOGIN_REQUEST });
    const response = await axios.post(`${URL}/auth/local/register`, {
      firstName,
      lastName,
      password,
      email,
      username,
    });
    const { data } = response;
    const msg = `Bienvenido ${firstName} ${lastName} !`;
    const usernameResponse: string = data.user.username;
    const jwt: string = data.jwt;
    dispatch({ type: ActionType.LOGIN, payload: { usernameResponse, jwt } });
    dispatch({ type: ActionType.ALERT_SUCCESS, payload: msg });
    dispatch({ type: ActionType.LOGIN_REQUEST_FINISH });
  } catch (error) {
    if (error) {
      const msg_danger = 'El nombre de usuario o la contraseña es incorrecta';
      dispatch({ type: ActionType.ALERT_DANGER, payload: msg_danger });
      dispatch({ type: ActionType.LOGIN_REQUEST_FINISH });
    }
  }
};

export const logOut = () => async (dispatch: Dispatch<ActionLogin>) => {
  try {
    dispatch({ type: ActionType.LOGIN_REQUEST });
    dispatch({ type: ActionType.LOGOUT });
    dispatch({ type: ActionType.LOGIN_REQUEST_FINISH });
  } catch (error) {
    console.log(error.message);
  }
};
