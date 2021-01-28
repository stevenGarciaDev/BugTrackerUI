/* eslint-disable import/prefer-default-export */
import { TicketActionTypes } from './ticket.types';
import { createTicket } from '../../services/ticketService';

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

export const createNewTicket = (ticketForm, userId, jwt) => async (dispatch) => {
  try {
    const response = await createTicket(ticketForm, userId, jwt);
    dispatch(createTicketSuccess(response));
  } catch (err) {
    dispatch(setTicketErrorMessage(err.message));
  }
};
