import { createSelector } from 'reselect';

export const getTicketsSlice = (state) => state.tickets;

export const selectAllTickets = createSelector(
  [getTicketsSlice],
  (ticketSlice) => ticketSlice.tickets,
);

export const getTicketErrorMessage = createSelector(
  [getTicketsSlice],
  (ticketSlice) => ticketSlice.ticketErrorMessage,
);

export const getTicketSuccessMessage = createSelector(
  [getTicketsSlice],
  (ticketSlice) => ticketSlice.successMessage,
);
