/* eslint-disable no-console */
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response
        && error.response.status >= 400
        && error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    // toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
