import { ProjectActionTypes } from './project.types';

const INITIAL_STATE = {
  projects: [],
  errorMessage: '',
};

const ProjectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectActionTypes.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [action.payload.project, ...state.projects],
        errorMessage: '',
      };
    case ProjectActionTypes.CREATE_PROJECT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default ProjectReducer;
