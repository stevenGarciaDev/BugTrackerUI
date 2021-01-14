import React from 'react';
import {
  Container, Table, TableHeadData, TableRow, TableData, Column, Button,
} from '../tickets-table/tickets-table.styles';

const ProjectsTable = () => (
  <Container>
    <Table>
      <colgroup>
        <Column width={350} />
        <Column width={150} />
        <Column width={150} />
        <Column width={150} />
      </colgroup>
      <thead>
        <TableRow>
          <TableHeadData>Name</TableHeadData>
          <TableHeadData># of Members</TableHeadData>
          <TableHeadData># of Open Tickets</TableHeadData>
          <TableHeadData>More</TableHeadData>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableData>Title</TableData>
          <TableData>Priority</TableData>
          <TableData>Assigned To</TableData>
          <TableData><Button to="/">View</Button></TableData>
        </TableRow>
      </tbody>
    </Table>
  </Container>
);

export default ProjectsTable;
