import React from 'react';
import TicketsTable from '../../components/tickets-table';
import PageHeadline from '../../styles/page-headline.style';

const Tickets = () => (
  <div>
    <PageHeadline>View Tickets</PageHeadline>
    <TicketsTable />
  </div>
);

export default Tickets;
