import { createSelector } from 'reselect';

import { getCurrentUser } from './user.utilities';

export const selectUser = (state) => state.user;

export const selectUserToken = createSelector(
  [selectUser],
  (user) => user.jwt,
);

export const selectCurrentUser = createSelector(
  [selectUserToken],
  (jwt) => getCurrentUser(jwt),
);
