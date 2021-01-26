import { ProjectActionTypes } from './project.types';
import { getUserProjects, createProject } from '../../services/projectService';

export const createProjectSuccess = (project) => ({
  type: ProjectActionTypes.CREATE_PROJECT_SUCCESS,
  payload: {
    project,
  },
});

export const setInitialProjects = (projects) => ({
  type: ProjectActionTypes.INITIALIZE_PROJECTS,
  payload: {
    projects,
  },
});

export const setErrorMessage = (errorMessage) => ({
  type: ProjectActionTypes.SET_PROJECT_ERROR_MESSAGE,
  payload: {
    errorMessage,
  },
});

export const setProjectSuccessMessage = (successMessage) => ({
  type: ProjectActionTypes.SET_PROJECT_SUCCESS_MESSAGE,
  payload: {
    successMessage,
  },
});

export const getProjects = (userId, jwt) => async (dispatch, getState) => {
  try {
    const { projects } = getState().projects;
    if (projects.length > 1) throw new Error('Duplicate request. Projects are already cached.');
    const response = await getUserProjects(userId, jwt);
    dispatch(setInitialProjects(response));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};

export const createProjectAsync = (projectForm, jwt) => async (dispatch) => {
  try {
    const response = await createProject(projectForm, jwt);
    dispatch(createProjectSuccess(response));
  } catch (error) {
    dispatch(setErrorMessage(error.message));
  }
};
