import React, { useState } from 'react';
import {
    Nav,
    OpenNavIcon,
    CloseNavIcon,
    NavList,
    NavTitle,
    NavItem,
    NavButtonLink
} from './landing-page-navbar.styles';
import SidebarNav from '../sidebar-nav';

const LandingPageNavbar = () => {
    const [dropdownStatus, setDropdownDisplay] = useState(false);

    return (
        <Nav>
            <NavTitle>Bug Tracker</NavTitle>
            {dropdownStatus && <SidebarNav />}

            {dropdownStatus ?
                <CloseNavIcon 
                    fontSize="large" 
                    onClick={() => setDropdownDisplay(!dropdownStatus) } 
                />
            :
                <OpenNavIcon
                    fontSize="large"
                    onClick={() => setDropdownDisplay(!dropdownStatus) } 
                />
            }
            <NavList>
                <NavItem to="/login">Login</NavItem>
                <NavItem to="/register">Register</NavItem>
                <NavButtonLink as="a" href="#demo">DEMO</NavButtonLink>
            </NavList>
        </Nav>
    );
};

export default LandingPageNavbar;
