import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sidebarReducer from './sidebar/sidebar.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['user', 'sidebar'],
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
