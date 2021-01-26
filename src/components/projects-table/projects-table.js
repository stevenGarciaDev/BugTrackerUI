import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Table, TableHeadData, TableRow, TableData, Column, Button,
} from '../tickets-table/tickets-table.styles';

const ProjectsTable = ({ projects }) => (
  <Container>
    <Table>
      <colgroup>
        <Column width={350} />
        <Column width={150} />
      </colgroup>
      <thead>
        <TableRow>
          <TableHeadData>Name</TableHeadData>
          <TableHeadData>More</TableHeadData>
        </TableRow>
      </thead>
      <tbody>
        {projects.length > 0
        && projects.map((p) => (
          <TableRow key={p.id}>
            <TableData>{p.name}</TableData>
            <TableData><Button to="/">View</Button></TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  </Container>
);

ProjectsTable.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

export default ProjectsTable;
