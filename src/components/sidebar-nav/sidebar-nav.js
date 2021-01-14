import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #171A40;
    padding: 30px;
    position: fixed;
    left: 0;
    height: 100vh;
    top: 0;
    width: 40%;
    max-width: 340px;
    z-index: 2;
`;

const NavItem = styled.div`
    margin: 10px;
`;

const SidebarNav = () => (
  <Container>
    <NavItem>Login</NavItem>
    <NavItem>Register</NavItem>
    <NavItem>DEMO</NavItem>
  </Container>
);

export default SidebarNav;
