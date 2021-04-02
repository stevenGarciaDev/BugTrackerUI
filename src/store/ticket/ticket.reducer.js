/* eslint-disable no-case-declarations */
import { TicketActionTypes } from './ticket.types';

const INITIAL_STATE = {
  tickets: [],
  ticketErrorMessage: '',
  successMessage: '',
};

const ticketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TicketActionTypes.SET_TICKET_ERROR_MESSAGE:
      return {
        ...state,
        ticketErrorMessage: action.payload.errorMessage,
        successMessage: '',
      };
    case TicketActionTypes.CREATE_TICKET_SUCCESS:
      return {
        ...state,
        tickets: [action.payload.ticket, ...state.tickets],
        ticketErrorMessage: '',
        successMessage: 'Successfully created a new ticket.',
      };
    case TicketActionTypes.SET_TICKET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload.successMessage,
        ticketErrorMessage: '',
      };
    case TicketActionTypes.SET_TICKETS:
      return {
        ...state,
        tickets: action.payload.tickets,
      };
    case TicketActionTypes.UPDATE_TICKET:
      const { ticket } = action.payload;
      return {
        ...state,
        tickets: state.tickets.map((t) => ((t.id === ticket.id) ? ticket : t)),
        successMessage: 'Successfully updated the ticket.',
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default ticketReducer;
