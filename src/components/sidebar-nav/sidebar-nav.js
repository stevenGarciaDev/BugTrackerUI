/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MdDashboard, MdAddBox } from 'react-icons/md';
import { BsListCheck } from 'react-icons/bs';
import { CgPlayListAdd } from 'react-icons/cg';
import { AiFillSchedule } from 'react-icons/ai';
import {
  Sidebar,
  NavContainer,
  NavSection,
  NavSectionName,
  NavItem,
  OpenSidebarIcon,
  CloseSidebarIcon,
  IconContainer,
  LinkText,
} from './sidebar-nav.styles';
import { selectSidebarStatus } from '../../store/sidebar/sidebar.selector';
import { openSidebar, closeSidebar } from '../../store/sidebar/sidebar.actions';

const SidebarNav = ({ isSidebarOpen, openSidebarNav, closeSidebarNav }) => (
  <div>
    <IconContainer>
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
    </IconContainer>
    <Sidebar isVisible={isSidebarOpen}>
      <NavContainer>
        <NavSection>
          <NavSectionName>OVERVIEW</NavSectionName>
          <NavItem to="/dashboard">
            <MdDashboard />
            <LinkText>Dashboard</LinkText>
            </NavItem>
        </NavSection>
        <NavSection>
          <NavSectionName>PROJECTS</NavSectionName>
          <NavItem to="/projects">
            <AiFillSchedule />
            <LinkText>View Projects</LinkText>
          </NavItem>
          <NavItem to="/project/create">
            <MdAddBox />
            <LinkText>Create New Project</LinkText>
          </NavItem>
        </NavSection>
        <NavSection>
          <NavSectionName>TICKETS</NavSectionName>
          <NavItem to="/tickets">
            <BsListCheck />
            <LinkText>View Tickets</LinkText>
            </NavItem>
          <NavItem to="/ticket/create">
            <CgPlayListAdd />
            <LinkText>Create New Ticket</LinkText>
          </NavItem>
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
