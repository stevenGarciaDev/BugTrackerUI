import { UserActionTypes } from './user.types';
import { registerUser, loginUser } from '../../services/authService';

export const authenticateSuccess = (userDataTransferObject) => ({
  type: UserActionTypes.AUTHENTICATE_SUCCESS,
  payload: {
    ...userDataTransferObject,
  },
});

export const authenticateFailure = (errorMessage) => ({
  type: UserActionTypes.AUTHENTICATE_FAIL,
  errorMessage,
});

export const signOut = () => ({
  type: UserActionTypes.USER_LOGOUT,
});

export const setErrorMessage = (message) => ({
  type: UserActionTypes.SET_ERROR_MESSAGE,
  errorMessage: message,
});

export const register = (registerForm) => async (dispatch) => {
  try {
    const response = await registerUser(registerForm);
    dispatch(authenticateSuccess(response.data));
  } catch (error) {
    dispatch(authenticateFailure(error.response.data));
  }
};

export const login = (loginForm) => async (dispatch) => {
  try {
    const response = await loginUser(loginForm);
    dispatch(authenticateSuccess(response.data));
  } catch (error) {
    dispatch(authenticateFailure(error.response.data));
  }
};
