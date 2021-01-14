/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Sidebar,
  NavContainer,
  NavSection,
  NavSectionName,
  NavItem,
  OpenSidebarIcon,
  CloseSidebarIcon,
} from './sidebar-nav.styles';
import { selectSidebarStatus } from '../../store/sidebar/sidebar.selector';
import { openSidebar, closeSidebar } from '../../store/sidebar/sidebar.actions';

const SidebarNav = ({ isSidebarOpen, openSidebarNav, closeSidebarNav }) => (
  <div>
    {isSidebarOpen
      ? (
        <CloseSidebarIcon
          fontSize="large"
          onClick={() => closeSidebarNav()}
        />
      )
      : (
        <OpenSidebarIcon
          fontSize="large"
          onClick={() => openSidebarNav()}
        />
      )}
    <Sidebar isVisible={isSidebarOpen}>
      <NavContainer>
        <NavSection>
          <NavSectionName>PROJECTS</NavSectionName>
          <NavItem to="/projects">View Projects</NavItem>
          <NavItem to="/project/create">Create New Projects</NavItem>
        </NavSection>
        <NavSection>
          <NavSectionName>TICKETS</NavSectionName>
          <NavItem to="/tickets">View Tickets</NavItem>
          <NavItem to="/ticket/create">Create New Ticket</NavItem>
        </NavSection>
        <NavSection>
          <NavSectionName>MANAGE</NavSectionName>
          <NavItem to="/manageRoles">User Roles</NavItem>
        </NavSection>
      </NavContainer>
    </Sidebar>
  </div>
);

const mapStateToProps = (state) => ({
  isSidebarOpen: selectSidebarStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  openSidebarNav: () => dispatch(openSidebar()),
  closeSidebarNav: () => dispatch(closeSidebar()),
});

SidebarNav.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  openSidebarNav: PropTypes.func.isRequired,
  closeSidebarNav: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav);
