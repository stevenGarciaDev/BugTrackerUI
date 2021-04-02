/* eslint-disable import/prefer-default-export */
import { TicketActionTypes } from './ticket.types';
import { createTicket, getAllTicketsForAllUsersProjects, updateTicket } from '../../services/ticketService';

export const setTicketErrorMessage = (errorMessage) => ({
  type: TicketActionTypes.SET_TICKET_ERROR_MESSAGE,
  payload: {
    errorMessage,
  },
});

export const setTicketSuccessMessage = (successMessage) => ({
  type: TicketActionTypes.SET_TICKET_SUCCESS_MESSAGE,
  payload: {
    successMessage,
  },
});

export const createTicketSuccess = (ticket) => ({
  type: TicketActionTypes.CREATE_TICKET_SUCCESS,
  payload: {
    ticket,
  },
});

export const setTickets = (tickets) => ({
  type: TicketActionTypes.SET_TICKETS,
  payload: {
    tickets,
  },
});

export const updateTicketInfo = (ticket) => ({
  type: TicketActionTypes.UPDATE_TICKET,
  payload: {
    ticket,
  },
});

export const createNewTicket = (ticketForm, userId, jwt) => async (dispatch) => {
  try {
    const response = await createTicket(ticketForm, userId, jwt);
    dispatch(createTicketSuccess(response));
  } catch (err) {
    dispatch(setTicketErrorMessage(err.message));
  }
};

export const getAllTicketsForProjects = (userId, jwt) => async (dispatch) => {
  try {
    const response = await getAllTicketsForAllUsersProjects(userId, jwt);
    dispatch(setTickets(response));
  } catch (err) {
    dispatch(setTicketErrorMessage(err.message));
  }
};

export const updateProjectTicket = (ticket, ticketId, jwt) => async (dispatch) => {
  try {
    const response = await updateTicket(ticket, ticketId, jwt);
    dispatch(updateTicketInfo(response));
  } catch (err) {
    dispatch(setTicketErrorMessage(err.message));
  }
};
