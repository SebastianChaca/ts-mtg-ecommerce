import { ActionType } from '../action-types/actionTypes';

export const handleSidebarAction = (showSidebar: boolean) => {
  return { type: ActionType.HANDLE_SIDEBAR, payload: showSidebar };
};
