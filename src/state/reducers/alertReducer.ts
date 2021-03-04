import { ActionType } from '../action-types/actionTypes';
import { AlertAction } from '../actions/actionAlert';
interface AlertState {
  show: boolean;
  msg: string | null;
  severity: string | null;
}
const initialState: AlertState = {
  show: false,
  msg: null,
  severity: null,
};
export const alertReducer = (state = initialState, action: AlertAction) => {
  switch (action.type) {
    case ActionType.ALERT_DANGER:
      return { ...state, show: true, msg: action.payload, severity: 'error' };
    case ActionType.ALERT_SUCCESS:
      return { ...state, show: true, msg: action.payload, severity: 'success' };
    case ActionType.ALERT_FALSE:
      return { show: false };
    default:
      return state;
  }
};
