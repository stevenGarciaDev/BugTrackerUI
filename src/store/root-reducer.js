import { combineReducers } from 'redux';
import sidebarReducer from './sidebar/sidebar.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  user: userReducer,
});

export default rootReducer;
