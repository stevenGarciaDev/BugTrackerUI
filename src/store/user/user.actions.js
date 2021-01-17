import { UserActionTypes } from './user.types';

export const LOGIN = (formData) => ({
  type: UserActionTypes.LOGIN,
  formData,
});

export const REGISTER = (formData) => ({
  type: UserActionTypes.REGISTER,
  formData,
});

export const AUTHENTICATE_SUCCESS = (jwt) => ({
  type: UserActionTypes.AUTHENTICATE_SUCCESS,
  jwt,
});

export const AUTHENTICATE_FAIL = (errorMessage) => ({
  type: UserActionTypes.AUTHENTICATE_FAIL,
  errorMessage,
});
