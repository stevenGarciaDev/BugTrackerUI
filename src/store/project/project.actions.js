import { ProjectActionTypes } from './project.types';
import { createProject } from '../../services/projectService';

export const createProjectSuccess = (project) => ({
  type: ProjectActionTypes.CREATE_PROJECT_SUCCESS,
  payload: {
    project,
  },
});

export const setErrorMessage = (errorMessage) => ({
  type: ProjectActionTypes.SET_ERROR_MESSAGE,
  payload: {
    errorMessage,
  },
});

export const createProjectAsync = (projectForm, jwt) => async (dispatch) => {
  try {
    const response = await createProject(projectForm, jwt);
    dispatch(createProjectSuccess(response));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};
