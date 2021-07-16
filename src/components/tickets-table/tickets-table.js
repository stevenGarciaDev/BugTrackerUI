import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Table, TableHeadData, TableRow, TableData, Button,
} from './tickets-table.styles';
import './tickets-table.css';

const TicketsTable = ({ tickets = [] }) => (
  <Container>
    <Table>
      <thead>
        <TableRow>
          <TableHeadData>Title</TableHeadData>
          <TableHeadData className="desktop-display">Priority</TableHeadData>
          <TableHeadData className="desktop-display">Assigned To</TableHeadData>
          <TableHeadData className="desktop-display">Status</TableHeadData>
          <TableHeadData>More</TableHeadData>
        </TableRow>
      </thead>
      <tbody>
        {tickets.length > 0
        && tickets.map((t) => (
          <TableRow key={t.id}>
            <TableData>{t.title}</TableData>
            <TableData className="desktop-display">{t.priority}</TableData>
            <TableData className="desktop-display">{t.userName}</TableData>
            <TableData className="desktop-display">{t.status}</TableData>
            <TableData className="view-button-container"><Button to={`/project/${t.projectId}/ticket/${t.id}`}>View</Button></TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </Container>
);

TicketsTable.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    priority: PropTypes.string,
    status: PropTypes.string.isRequired,
    projectId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
  })),
};

TicketsTable.defaultProps = {
  tickets: [],
};

export default TicketsTable;
