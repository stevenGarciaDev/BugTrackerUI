import { SidebarActionTypes } from './sidebar.types';

const INITIAL_STATE = {
  isSidebarOpen: true,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarActionTypes.OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: action.payload.isSidebarOpen,
      };
    case SidebarActionTypes.CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: action.payload.isSidebarOpen,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
