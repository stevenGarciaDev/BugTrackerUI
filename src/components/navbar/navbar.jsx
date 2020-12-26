import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

const Nav = styled.nav`
    align-items: center;
    background-color: #28384c;
    color: white;
    display: flex;
    height: 65px;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
`;

const NavDropdown = styled.div`

`;

const NavIcon = styled(MenuIcon)`
    color: white;
`;

const Navbar = () => (
    <Nav>
        <h1>Bug Tracker</h1>

        <NavIcon fontSize="large" />
    </Nav>
);

export default Navbar;
