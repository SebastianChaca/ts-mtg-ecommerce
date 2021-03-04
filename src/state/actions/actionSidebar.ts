import { ActionType } from '../action-types/actionTypes';

interface HANDLE_SIDEBAR {
  type: ActionType.HANDLE_SIDEBAR;
  payload: boolean;
}

export type ActionSideBar = HANDLE_SIDEBAR;
