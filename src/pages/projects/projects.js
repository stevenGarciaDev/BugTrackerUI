import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectPreview from '../../components/project-preview';
import PageHeadline from '../../styles/page-headline.style';
import { selectUserProjects } from '../../store/project/project.selector';
import { getProjects } from '../../store/project/project.actions';
import { selectUserToken, selectCurrentUserId } from '../../store/user/user.selector';
import { ProjectsContainer, ProjectsGrid } from './projects.styles';

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
  userId: selectCurrentUserId(state),
  jwt: selectUserToken(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
