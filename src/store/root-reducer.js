/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sidebarReducer from './sidebar/sidebar.reducer';
import userReducer from './user/user.reducer';
import projectReducer from './project/project.reducer';
import ticketReducer from './ticket/ticket.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['user', 'sidebar', 'projects', 'tickets'],
};

const appReducer = combineReducers({
  sidebar: sidebarReducer,
  user: userReducer,
  projects: projectReducer,
  tickets: ticketReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    storage.removeItem('persist:root');
    state = undefined;
  }

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
