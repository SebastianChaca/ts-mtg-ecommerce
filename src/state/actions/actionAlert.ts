import { ActionType } from '../action-types/actionTypes';

interface ALERT_DANGER {
  type: ActionType.ALERT_DANGER;
  payload: string;
}
interface ALERT_SUCCESS {
  type: ActionType.ALERT_SUCCESS;
  payload: string;
}
interface ALERT_FALSE {
  type: ActionType.ALERT_FALSE;
}

export type AlertAction = ALERT_DANGER | ALERT_SUCCESS | ALERT_FALSE;
