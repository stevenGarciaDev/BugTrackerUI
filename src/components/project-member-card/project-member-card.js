import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, RemoveIcon } from './project-member-card.styles';

const ProjectMemberCard = ({ name, removeMember }) => (
  <Container>
    <Content>
      <RemoveIcon onClick={() => removeMember(name)} />
      {name}
    </Content>
  </Container>
);

ProjectMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  removeMember: PropTypes.func.isRequired,
};

export default ProjectMemberCard;
