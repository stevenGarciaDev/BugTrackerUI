import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicketStatusPieChart from '../../components/ticket-status-pie-chart';
import TicketTypesPieChart from '../../components/ticket-types-pie-chart';
import TicketsTable from '../../components/tickets-table';
import { getAllTicketsForProjects } from '../../store/ticket/ticket.actions';
import { selectAllTickets } from '../../store/ticket/ticket.selector';
import { selectUserToken, selectCurrentUserId } from '../../store/user/user.selector';
import {
  DashboardContainer, PageTitle, Subheadline, TicketsDetailContainer, TicketsInfoContainer,
  TicketInfo, ChartContainer, SectionName, NewTicketsContainer,
} from './dashboard.styles';

const Dashboard = ({
  tickets, userId, jwt, initializeTickets,
}) => {
  useEffect(() => {
    initializeTickets(userId, jwt);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardContainer>
      <div>
        <PageTitle>Overview</PageTitle>
        <Subheadline>Welcome to the BugTracks Dashboard</Subheadline>
      </div>
      <TicketsDetailContainer>
        <TicketsInfoContainer>
          <TicketInfo>
            <SectionName>Ticket Types</SectionName>
            <ChartContainer>
              <TicketTypesPieChart />
            </ChartContainer>
          </TicketInfo>
          <TicketInfo>
            <SectionName>Ticket Completion Status</SectionName>
            <ChartContainer>
              <TicketStatusPieChart />
            </ChartContainer>
          </TicketInfo>
        </TicketsInfoContainer>
        <NewTicketsContainer>
          <SectionName>New Tickets</SectionName>
          <TicketsTable tickets={tickets} />
        </NewTicketsContainer>
      </TicketsDetailContainer>
    </DashboardContainer>
  );
};

const mapStateToProps = (state) => ({
  tickets: selectAllTickets(state),
  userId: selectCurrentUserId(state),
  jwt: selectUserToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  initializeTickets: (userId, jwt) => dispatch(getAllTicketsForProjects(userId, jwt)),
});

Dashboard.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  initializeTickets: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  jwt: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
