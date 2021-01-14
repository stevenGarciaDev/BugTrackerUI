import React, { useState } from 'react';
import {
  Sidebar,
  NavContainer,
  NavSection,
  NavSectionName,
  NavItem,
  OpenSidebarIcon,
  CloseSidebarIcon,
} from './sidebar-nav.styles';

const SidebarNav = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  return (
    <div>
      {isSidebarVisible
        ? (
          <CloseSidebarIcon
            fontSize="large"
            onClick={() => setSidebarVisibility(!isSidebarVisible)}
          />
        )
        : (
          <OpenSidebarIcon
            fontSize="large"
            onClick={() => setSidebarVisibility(!isSidebarVisible)}
          />
        )}
      <Sidebar isVisible={isSidebarVisible}>
        <NavContainer>
          <NavSection>
            <NavSectionName>PROJECTS</NavSectionName>
            <NavItem>View Projects</NavItem>
            <NavItem>Create New Projects</NavItem>
          </NavSection>
          <NavSection>
            <NavSectionName>TICKETS</NavSectionName>
            <NavItem>View Tickets</NavItem>
            <NavItem>Create New Ticket</NavItem>
          </NavSection>
          <NavSection>
            <NavSectionName>MANAGE</NavSectionName>
            <NavItem>User Roles</NavItem>
          </NavSection>
        </NavContainer>
      </Sidebar>
    </div>
  );
};

export default SidebarNav;
