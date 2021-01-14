import React from 'react';
import {
  Container, Table, TableHeadData, TableRow, TableData, Column, Button,
} from './tickets-table.styles';

const TicketsTable = () => (
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
        <TableRow>
          <TableData>Title</TableData>
          <TableData>Priority</TableData>
          <TableData>Assigned To</TableData>
          <TableData>Status</TableData>
          <TableData><Button to="/">View</Button></TableData>
        </TableRow>
      </tbody>
    </Table>
  </Container>
);

export default TicketsTable;
