import React from 'react';
import {
  Nav,
  NavList,
  NavTitleLink,
  NavItem,
} from './landing-page-navbar.styles';

const LandingPageNavbar = () => (
  <Nav>
    <NavTitleLink to="/">Bug Tracker</NavTitleLink>
    <NavList>
      <NavItem to="/login">Login</NavItem>
      <NavItem to="/register">Register</NavItem>
    </NavList>
  </Nav>
);

export default LandingPageNavbar;
