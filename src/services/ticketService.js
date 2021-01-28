import http from './httpService';

const apiEndpoint = '/tickets';

export const getAllTickets = async (jwt) => {
  const tickets = await http.get(`${apiEndpoint}`,
    { headers: { 'x-auth-token': jwt } });
  return tickets.data;
};

export const getAllTicketsForUser = async (jwt) => {
  const tickets = await http.get(`${apiEndpoint}/user`,
    { headers: { 'x-auth-token': jwt } });
  return tickets.data;
};

export const getTicket = async (ticketId, jwt) => {
  const ticket = await http.get(`${apiEndpoint}/${ticketId}`,
    { headers: { 'x-auth-token': jwt } });
  return ticket.data;
};

export const getTicketsForProject = async (projectId, jwt) => {
  const tickets = await http.get(`${apiEndpoint}/project/${projectId}`,
    { headers: { 'x-auth-token': jwt } });
  return tickets.data;
};

export const createTicket = async (ticketForm, createdByUserId, jwt) => {
  const newTicket = await http.post(`${apiEndpoint}`,
    { ...ticketForm, createdByUserId },
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  return newTicket.data;
};

export const updateTicket = async (ticketForm, ticketId, jwt) => {
  const updatedTicket = await http.put(`${apiEndpoint}/${ticketId}`,
    { ticketForm },
    { headers: { 'x-auth-token': jwt } });
  return updatedTicket.data;
};

export const deleteTicket = async (ticketId, jwt) => {
  await http.delete(`${apiEndpoint}/${ticketId}`,
    { headers: { 'x-auth-token': jwt } });
};
