import { createSelector } from 'reselect';

export const selectProject = (state) => state.projects;

export const selectProjectSuccessMessage = createSelector(
  [selectProject],
  (projects) => projects.successMessage,
);

export const selectProjectErrorMessage = createSelector(
  [selectProject],
  (projects) => projects.projectErrorMessage,
);

export const selectUserProjects = createSelector(
  [selectProject],
  (projects) => projects.projects,
);
