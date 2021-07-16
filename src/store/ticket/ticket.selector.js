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

export const selectTicketCountForUI = createSelector(
  [selectAllTickets],
  (tickets) => tickets != null && tickets.filter((t) => t.type === 'UI').length,
);

export const selectTicketCountForBackend = createSelector(
  [selectAllTickets],
  (tickets) => tickets && tickets.filter((t) => t.type === 'Backend').length,
);

export const selectTicketCountForDevops = createSelector(
  [selectAllTickets],
  (tickets) => tickets && tickets.filter((t) => t.type === 'Devops').length,
);

export const selectCompletedTicketsCount = createSelector(
  [selectAllTickets],
  (tickets) => tickets && tickets.filter((t) => t.status === 'Completed').length,
);

export const selectIncompleteTicketsCount = createSelector(
  [selectAllTickets],
  (tickets) => tickets.filter((t) => t.status !== 'Completed').length,
);
