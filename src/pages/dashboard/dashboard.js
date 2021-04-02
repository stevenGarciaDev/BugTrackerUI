import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TicketStatusPieChart from '../../components/ticket-status-pie-chart';
import TicketTypesPieChart from '../../components/ticket-types-pie-chart';
import TicketsTable from '../../components/tickets-table';
import { getAllTicketsForProjects } from '../../store/ticket/ticket.actions';
import {
  selectAllTickets, selectTicketCountForUI, selectTicketCountForBackend, selectTicketCountForDevops,
  selectCompletedTicketsCount, selectIncompleteTicketsCount,
} from '../../store/ticket/ticket.selector';
import { selectUserToken, selectCurrentUserId } from '../../store/user/user.selector';
import {
  DashboardContainer, PageTitle, Subheadline, TicketsDetailContainer, TicketsInfoContainer,
  TicketInfo, ChartContainer, SectionName, NewTicketsContainer,
} from './dashboard.styles';

const Dashboard = ({
  tickets, userId, jwt, initializeTickets,
  uiTicketsCount = 0, backendTicketsCount = 0, devopsTicketsCount = 0,
  completedTicketsCount, incompleteTicketsCount,
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
        {(tickets && tickets.length > 0)
        && (
        <TicketsInfoContainer>
          <TicketInfo>
            <SectionName>Ticket Types</SectionName>
            <ChartContainer>
              <TicketTypesPieChart
                uiCount={uiTicketsCount}
                backendCount={backendTicketsCount}
                devopsCount={devopsTicketsCount}
              />
            </ChartContainer>
          </TicketInfo>
          <TicketInfo>
            <SectionName>Ticket Completion Status</SectionName>
            <ChartContainer>
              <TicketStatusPieChart
                completedCount={completedTicketsCount}
                incompletedCount={incompleteTicketsCount}
              />
            </ChartContainer>
          </TicketInfo>
        </TicketsInfoContainer>
        )}
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
  uiTicketsCount: selectTicketCountForUI(state),
  backendTicketsCount: selectTicketCountForBackend(state),
  devopsTicketsCount: selectTicketCountForDevops(state),
  completedTicketsCount: selectCompletedTicketsCount(state),
  incompleteTicketsCount: selectIncompleteTicketsCount(state),
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
  uiTicketsCount: PropTypes.number.isRequired,
  backendTicketsCount: PropTypes.number.isRequired,
  devopsTicketsCount: PropTypes.number.isRequired,
  completedTicketsCount: PropTypes.number.isRequired,
  incompleteTicketsCount: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
