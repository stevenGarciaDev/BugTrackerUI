/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicketsTable from '../../components/tickets-table';
import PageHeadline from '../../styles/page-headline.style';
import { selectUserToken, selectCurrentUserId } from '../../store/user/user.selector';
import { getAllTicketsForUser } from '../../services/ticketService';

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

const mapStateToProps = (state) => ({
  userId: selectCurrentUserId(state),
  jwt: selectUserToken(state),
});

export default connect(mapStateToProps)(Tickets);
