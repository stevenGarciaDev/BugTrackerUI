import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserToken } from '../../store/user/user.selector';
import { deleteProjectAsync } from '../../store/project/project.actions';

const Container = styled.div`
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 5px 5px 20px #ccc;
    position: absolute;
    right: 5px;
    top: 35px;
    z-index: 3;
`;

const LinkItem = styled(Link)`
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    display: block;
    padding: 7px;
    text-align: center;
    text-decoration: none;
    width: 80px;

    &:focus {
        color: grey;
    }
`;

const ProjectPreviewDropdown = ({ id, jwt, deleteProject }) => (
  <Container>
    <LinkItem to={`/viewproject/${id}`}>View</LinkItem>
    <LinkItem onClick={() => deleteProject(id, jwt)}>Delete</LinkItem>
  </Container>
);

const mapStateToProps = (state) => ({
  jwt: selectUserToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteProject: (id, jwt) => dispatch(deleteProjectAsync(id, jwt)),
});

ProjectPreviewDropdown.propTypes = {
  id: PropTypes.number.isRequired,
  deleteProject: PropTypes.func.isRequired,
  jwt: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPreviewDropdown);
