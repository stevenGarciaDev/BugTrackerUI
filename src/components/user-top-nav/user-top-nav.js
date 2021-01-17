import React from 'react';
import styled from 'styled-components';
import UserTopNavIcon from '../user-top-nav-icon';

const Container = styled.div`
    align-items: center;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    height: 60px;
    justify-content: flex-end;
    position: fixed;
    width: 100%;
`;

const UserTopNav = () => (
  <Container>
    <UserTopNavIcon />
  </Container>
);

export default UserTopNav;
