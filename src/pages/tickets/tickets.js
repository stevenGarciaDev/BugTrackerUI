import React from 'react';
import TicketsTable from '../../components/tickets-table';
import PageHeadline from '../../styles/page-headline.style';

const Tickets = () => (
  <div>
    <PageHeadline>View Your Assigned Tickets</PageHeadline>
    <TicketsTable />
  </div>
);

export default Tickets;
