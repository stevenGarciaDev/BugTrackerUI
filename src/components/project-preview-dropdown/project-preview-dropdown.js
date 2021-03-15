import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const ProjectPreviewDropdown = ({ id }) => (
  <Container>
    <LinkItem to={`/viewproject/${id}`}>View</LinkItem>
    <LinkItem>Delete</LinkItem>
  </Container>
);

ProjectPreviewDropdown.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ProjectPreviewDropdown;
