import jwtDecode from 'jwt-decode';

// eslint-disable-next-line import/prefer-default-export
export const getCurrentUser = (jwt) => {
  try {
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
};
