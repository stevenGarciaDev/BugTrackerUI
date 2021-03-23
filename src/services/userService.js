/* eslint-disable import/prefer-default-export */
import http, { handleErrorResponse } from './httpService';

const apiEndpoint = '/users';

export const getByUsername = async (username) => {
  try {
    const response = await http
      .get(`${apiEndpoint}/member/${username}`);
    return response.data;
  } catch (error) {
    return handleErrorResponse();
  }
};
