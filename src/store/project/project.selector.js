import { createSelector } from 'reselect';

export const selectProject = (state) => state.projects;

export const selectProjectSuccessMessage = createSelector(
  [selectProject],
  (projects) => projects.successMessage,
);

export const selectUserProjects = createSelector(
  [selectProject],
  (projects) => projects.projects,
);
