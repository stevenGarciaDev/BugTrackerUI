import http from './httpService';

const apiEndpoint = '/tickets';

export const getAllTickets = async (jwt) => {
  const tickets = await http.get(`${apiEndpoint}`,
    { headers: { 'x-auth-token': jwt } });
  return tickets.data;
};

export const getAllTicketsForUser = async (userId, jwt) => {
  try {
    const tickets = await http.get(`${apiEndpoint}/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    return tickets.data;
  } catch (error) {
    return error.message;
  }
};

export const getTicket = async (ticketId, jwt) => {
  try {
    const ticket = await http.get(`${apiEndpoint}/${ticketId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    return ticket.data;
  } catch (error) {
    return error.message;
  }
};

export const getTicketsForProject = async (projectId, jwt) => {
  try {
    const tickets = await http.get(`${apiEndpoint}/project/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    return tickets.data;
  } catch (error) {
    return error.message;
  }
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
  try {
    const updatedTicket = await http.put(`${apiEndpoint}/${ticketId}`,
      { ...ticketForm },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    return updatedTicket.data;
  } catch (error) {
    return error.message;
  }
};

export const deleteTicket = async (ticketId, jwt) => {
  await http.delete(`${apiEndpoint}/${ticketId}`,
    { headers: { 'x-auth-token': jwt } });
};
