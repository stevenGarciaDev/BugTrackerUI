import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';

export const Sidebar = styled.div`
    background-color: #171A40;
    display: ${(props) => (props.isVisible ? 'relative' : 'none')};
    height: 100vh;
    left: 0;
    max-width: 290px;
    min-width: 250px;
    padding: 10px;
    position: fixed;
    top: 0;
    width: 40%;
    z-index: 2;

    @media screen and (min-width: 700px) {
      padding: 20px;
    }
`;

export const NavContainer = styled.nav`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 100px;
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
  width: 100%;
`;

export const NavSectionName = styled.h2`
    color: #b7c2d0;
    font-size: 13px;
`;

export const NavItem = styled(Link)`
    align-items: center;
    color: white;
    display: flex;
    font-family: ${(props) => props.theme.headline};
    font-size: 18px;
    margin: 10px;
    text-decoration: none;

    &:hover {
      color: gray;
    }
`;

export const LinkText = styled.span`
  margin-left: 10px;
`;

export const IconContainer = styled.div`
  position: fixed;
  top: 5px;
  z-index: 3;
`;

export const OpenSidebarIcon = styled(MenuIcon)`
  color: black;
  cursor: pointer;
  left: 20px;
  position: absolute;
  top: 10px;
  z-index: 3;
`;

export const CloseSidebarIcon = styled(CancelIcon)`
  color: white;
  cursor: pointer;
  left: 20px;
  position: absolute;
  top: 10px;
  z-index: 3;
`;
