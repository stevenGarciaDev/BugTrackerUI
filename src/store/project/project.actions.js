import { ProjectActionTypes } from './project.types';
import { handleErrorResponse } from '../../services/httpService';
import { getUserProjects, createProject, deleteProject } from '../../services/projectService';

export const createProjectSuccess = (project) => ({
  type: ProjectActionTypes.CREATE_PROJECT_SUCCESS,
  payload: {
    project,
  },
});

export const deleteProjectSuccess = (projectId) => ({
  type: ProjectActionTypes.DELETE_PROJECT_SUCCESS,
  payload: {
    projectId,
  },
});

export const setInitialProjects = (projects) => ({
  type: ProjectActionTypes.INITIALIZE_PROJECTS,
  payload: {
    projects,
  },
});

export const setProjectErrorMessage = (errorMessage) => ({
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
    dispatch(setProjectErrorMessage(error.message));
  }
};

export const createProjectAsync = (projectForm, jwt) => async (dispatch) => {
  try {
    const response = await createProject(projectForm, jwt);
    dispatch(setProjectErrorMessage(''));
    dispatch(createProjectSuccess(response));
  } catch (error) {
    const errorResponse = handleErrorResponse(error);
    dispatch(setProjectErrorMessage(errorResponse.message));
  }
};

export const deleteProjectAsync = (projectId, jwt) => async (dispatch) => {
  try {
    await deleteProject(projectId, jwt);
    dispatch(deleteProjectSuccess(projectId));
  } catch (error) {
    dispatch(setProjectErrorMessage(error.message));
  }
};
