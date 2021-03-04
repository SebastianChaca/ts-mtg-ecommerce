import { ActionType } from '../action-types/actionTypes';
import { ActionSideBar } from '../actions/actionSidebar';

interface sidebarState {
  showSidebar: boolean;
}
const initialState: sidebarState = {
  showSidebar: false,
};

export const sidebarReducer = (state = initialState, action: ActionSideBar) => {
  switch (action.type) {
    case ActionType.HANDLE_SIDEBAR:
      return { ...state, showSidebar: action.payload };

    default:
      return state;
  }
};
