import { createSelector } from 'reselect';

import { getCurrentUser } from './user.utilities';

export const selectUser = (state) => state.user;

export const selectUserToken = createSelector(
  [selectUser],
  (user) => user.token,
);

export const selectCurrentUser = createSelector(
  [selectUserToken],
  (token) => getCurrentUser(token),
);

export const selectCurrentUserId = createSelector(
  [selectCurrentUser],
  (user) => user.id,
);

export const selectUserName = createSelector(
  [selectUser],
  (user) => user.userName,
);
