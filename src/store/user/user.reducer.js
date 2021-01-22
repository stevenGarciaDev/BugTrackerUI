import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  token: '',
  errorMessage: '',
  imageUrl: '',
  jobTitle: '',
  permissions: '',
  userName: '',
  email: '',
  id: '',
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case UserActionTypes.AUTHENTICATE_FAIL:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};

export default UserReducer;
