import http from './httpService';

const apiEndpoint = '/projects';

export const getAllProjects = async (jwt) => {
  const projects = await http.get(`${apiEndpoint}`,
    { headers: { 'x-auth-token': jwt } });
  return projects.data;
};

export const getProjects = async (userId, jwt) => {
  const projects = await http.get(`${apiEndpoint}/${userId}`,
    { headers: { 'x-auth-token': jwt } });
  return projects.data;
};

export const createProject = async (projectForm, jwt) => {
  const newProject = await http.post(`${apiEndpoint}`,
    { ...projectForm },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  return newProject.data[0];
};

export const deleteProject = async (projectId, jwt) => {
  await http.delete(`${apiEndpoint}/${projectId}`,
    { headers: { 'x-auth-token': jwt } });
};
