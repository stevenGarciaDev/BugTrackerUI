import { combineReducers } from 'redux';
import sidebarReducer from './sidebar/sidebar.reducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});

export default rootReducer;
