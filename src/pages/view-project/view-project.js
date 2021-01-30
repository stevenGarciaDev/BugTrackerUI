import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectUserProjects } from '../../store/project/project.selector';
import TicketsTable from '../../components/tickets-table';
import PageHeadline from '../../styles/page-headline.style';
import { getMembersForProject } from '../../services/projectService';
import { getTicketsForProject } from '../../services/ticketService';
import {
  Container, SectionTitle, ProjectMemberContainer, ProjectMemberSection, ProjectMember,
} from './view-project.styles';
import { selectUserToken } from '../../store/user/user.selector';

const ViewProject = ({ match, projects, jwt }) => {
  const projectId = parseInt(match.params.id, 10);
  const project = projects.find((p) => p.id === projectId);
  const [tickets, setTickets] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function initializeTickets() {
      const projectTickets = await getTicketsForProject(projectId, jwt);
      setTickets(projectTickets);
    }
    async function initializeMembers() {
      const projectMembers = await getMembersForProject(projectId, jwt);
      setMembers(projectMembers);
    }
    initializeTickets();
    initializeMembers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h1>View Your Project</h1>
      <PageHeadline>{ project.name }</PageHeadline>
      <p>{project.description}</p>
      <div>
        <SectionTitle>Tickets</SectionTitle>
        <TicketsTable tickets={tickets} />
      </div>
      <ProjectMemberContainer>
        <SectionTitle>Project Members</SectionTitle>
        <ProjectMemberSection>
          {members.length > 0
          && members.map((m) => (
            <ProjectMember key={m.id}>{m.userName}</ProjectMember>
          ))}
        </ProjectMemberSection>
      </ProjectMemberContainer>
    </Container>
  );
};

ViewProject.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  jwt: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  projects: selectUserProjects(state),
  jwt: selectUserToken(state),
});

export default connect(mapStateToProps)(ViewProject);
