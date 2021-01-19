import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  ),
);

export const persistor = persistStore(store);

export default store;
