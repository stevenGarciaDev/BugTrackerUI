import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectPreview from '../../components/project-preview';
import PageHeadline from '../../styles/page-headline.style';
import { selectUserProjects } from '../../store/project/project.selector';
import { getProjects } from '../../store/project/project.actions';
import { ProjectsContainer, ProjectsGrid } from './projects.styles';
import withUserTokenAndID from '../../higher-order-components/withUserTokenAndID';

const Projects = ({
  userProjects, initializeProjects, userId, jwt,
}) => {
  useEffect(() => {
    initializeProjects(userId, jwt);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {userProjects.length === 0
        ? <PageHeadline>You do not have any projects yet.</PageHeadline>
        : (
          <>
            <PageHeadline>View Your Projects</PageHeadline>
            <ProjectsContainer>
              <ProjectsGrid>
                {userProjects.length > 0
                && userProjects.map((p) => (
                  <ProjectPreview
                    key={p.id}
                    id={p.id}
                    title={p.name}
                    description={p.description}
                    dateCreated={p.dateCreated}
                  />
                ))}
              </ProjectsGrid>
            </ProjectsContainer>
          </>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userProjects: selectUserProjects(state),
});

const mapDispatchToProps = (dispatch) => ({
  initializeProjects: (userId, jwt) => dispatch(getProjects(userId, jwt)),
});

Projects.propTypes = {
  initializeProjects: PropTypes.func.isRequired,
  userProjects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  userId: PropTypes.number.isRequired,
  jwt: PropTypes.string.isRequired,
};

const ConnectedProjects = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default withUserTokenAndID(ConnectedProjects);
