import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectPreviewDropdown from '../project-preview-dropdown';
import {
  Project, Container, ProjectHeader, ProjectInfo, TitleContainer,
  ProjectColorIdentifier, Title, Date, Description, OptionsIcon,
} from './project-preview.styles';
import { getYear, getMonth, getDay } from '../../utilities/dateUtils';

const ProjectPreview = ({
  id, title, description, dateCreated,
}) => {
  const [isSelected, select] = useState(false);

  const dateToDisplay = `${getMonth(dateCreated)} ${getDay(dateCreated)}, ${getYear(dateCreated)}`;
  return (
    <Project>
      <Container onClick={() => select(!isSelected)}>
        <ProjectHeader>
          <ProjectInfo>
            <ProjectColorIdentifier />
            <TitleContainer>
              <Title>{title}</Title>
              <Date>{dateToDisplay}</Date>
            </TitleContainer>
          </ProjectInfo>
          <OptionsIcon />
        </ProjectHeader>
        <Description>
          {description}
        </Description>
      </Container>
      {isSelected && <ProjectPreviewDropdown id={id} />}
    </Project>
  );
};

ProjectPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
};

export default ProjectPreview;
