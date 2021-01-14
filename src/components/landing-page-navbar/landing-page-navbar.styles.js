import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    align-items: center;
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    width: 100%;
    z-index: 2;

    @media screen and (min-width: 900px) {
        padding: 10px 40px 0px;
    }

    @media screen and (min-width: 1200px) {
        padding: 10px 80px 0px;
    }
`;

export const OpenNavIcon = styled(MenuIcon)`
    color: white;
    cursor: pointer;

    @media screen and (min-width: 900px) {
        display: none !important;
    }
`;

export const CloseNavIcon = styled(CancelIcon)`
    color: white;
    cursor: pointer;

    @media screen and (min-width: 900px) {
        display: none !important;
    }
`;

export const NavList = styled.div`
    display: none;

    @media screen and (min-width: 900px) {
        display: flex;
        flex-direction: row;
    }
`;

export const NavTitle = styled.h1`
    font-size: 25px;
    position: relative;
    top: -5px;
`;

export const NavItem = styled(Link)`
    color: white;
    display: inline-block;
    padding: 0 10px;
    text-decoration: none;
`;

export const NavButtonLink = styled(Link)`
    background-color: ${(props) => props.theme.colors.lightBlue};
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin-left: 10px;
    padding: 5px 15px;
    position: relative;
    top: -5px;
    text-decoration: none;
`;
