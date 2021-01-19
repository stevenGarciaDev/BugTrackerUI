import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  jwt: '',
  errorMessage: '',
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.REGISTER:
      return {
        ...state,
        formData: action.formData,
      };
    case UserActionTypes.LOGIN:
      return {
        ...state,
        formData: action.formData,
      };
    case UserActionTypes.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        jwt: action.jwt,
      };
    case UserActionTypes.AUTHENTICATE_FAIL:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

export default UserReducer;
