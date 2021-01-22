import http from './httpService';

const apiEndpoint = '/accounts';

export const registerUser = async (registerForm) => {
  const response = await http.post(`${apiEndpoint}/register`,
    { ...registerForm });
  return response;
};

export const loginUser = async (loginForm) => {
  const response = await http.post(`${apiEndpoint}/login`,
    { ...loginForm });
  return response;
};
