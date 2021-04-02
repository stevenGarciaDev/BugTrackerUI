/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TicketsTable from '../../components/tickets-table';
import PageHeadline from '../../styles/page-headline.style';
import { getAllTicketsForUser } from '../../services/ticketService';
import withUserTokenAndID from '../../higher-order-components/withUserTokenAndID';

const Tickets = ({ userId, jwt }) => {
  const [tickets, setTickets] = useState(undefined);

  useEffect(() => {
    async function initializeTickets() {
      const assignedTickets = await getAllTicketsForUser(userId, jwt);
      setTickets(assignedTickets);
    }
    initializeTickets();
  }, []);

  return (
    <div>
      {tickets && (
        <>
          <PageHeadline>View Your Assigned Tickets</PageHeadline>
          <TicketsTable tickets={tickets} />
        </>
      )}
    </div>
  );
};

Tickets.propTypes = {
  userId: PropTypes.number.isRequired,
  jwt: PropTypes.string.isRequired,
};

export default withUserTokenAndID(Tickets);
