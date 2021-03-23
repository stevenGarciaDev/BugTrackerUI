import { ProjectActionTypes } from './project.types';

const INITIAL_STATE = {
  projects: [],
  projectErrorMessage: '',
  successMessage: '',
};

const ProjectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [action.payload.project, ...state.projects],
        projectErrorMessage: '',
        successMessage: 'Project Successfully Created.',
      };
    case ProjectActionTypes.SET_PROJECT_ERROR_MESSAGE:
      return {
        ...state,
        projectErrorMessage: action.payload.errorMessage,
        successMessage: '',
      };
    case ProjectActionTypes.SET_PROJECT_SUCCESS_MESSAGE:
      return {
        ...state,
        projectErrorMessage: '',
        successMessage: action.payload.successMessage,
      };
    case ProjectActionTypes.INITIALIZE_PROJECTS:
      return {
        ...state,
        projects: action.payload.projects,
      };
    case ProjectActionTypes.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter((p) => p.id !== action.payload.projectId),
      };
    default:
      return state;
  }
};

export default ProjectReducer;
