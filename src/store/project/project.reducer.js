import { ProjectActionTypes } from './project.types';

const INITIAL_STATE = {
  projects: [],
  projectErrorMessage: '',
};

const ProjectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [action.payload.project, ...state.projects],
        projectErrorMessage: '',
      };
    case ProjectActionTypes.SET_PROJECT_ERROR_MESSAGE:
      return {
        ...state,
        projectErrorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default ProjectReducer;
