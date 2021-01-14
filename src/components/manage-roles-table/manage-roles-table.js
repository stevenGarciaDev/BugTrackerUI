import React from 'react';
import {
  Container, Table, TableHeadData, TableRow, TableData, Column, Button,
} from '../tickets-table/tickets-table.styles';
import { Select } from './manage-roles.table.styles';

const ManageRolesTable = () => (
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
          <TableHeadData>Team Member</TableHeadData>
          <TableHeadData>Permissions</TableHeadData>
          <TableHeadData>Role</TableHeadData>
          <TableHeadData>Action</TableHeadData>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableData>Title</TableData>
          <TableData>Normal</TableData>
          <TableData>
            <Select type="text">
              <option value="Project Manager">Project Manager</option>
              <option value="Project Manager">Developer</option>
              <option value="Project Manager">Admin</option>
            </Select>
          </TableData>
          <TableData><Button to="/">Assign</Button></TableData>
        </TableRow>
      </tbody>
    </Table>
  </Container>
);

export default ManageRolesTable;
