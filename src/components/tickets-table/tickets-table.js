import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Table, TableHeadData, TableRow, TableData, Column, Button,
} from './tickets-table.styles';

const TicketsTable = ({ tickets = [] }) => (
  <Container>
    <Table>
      <colgroup>
        <Column width={350} />
        <Column width={150} />
        <Column width={150} />
        <Column width={150} />
        <Column width={150} />
      </colgroup>
      <thead>
        <TableRow>
          <TableHeadData>Title</TableHeadData>
          <TableHeadData>Priority</TableHeadData>
          <TableHeadData>Assigned To</TableHeadData>
          <TableHeadData>Status</TableHeadData>
          <TableHeadData>More</TableHeadData>
        </TableRow>
      </thead>
      <tbody>
        {tickets.length > 0
        && tickets.map((t) => (
          <TableRow>
            <TableData>{t.title}</TableData>
            <TableData>{t.priority}</TableData>
            <TableData>{t.userName}</TableData>
            <TableData>{t.status}</TableData>
            <TableData><Button to={`/project/${t.projectId}/ticket/${t.id}`}>View</Button></TableData>
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
  })).isRequired,
};

export default TicketsTable;
