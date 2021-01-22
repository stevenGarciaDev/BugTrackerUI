import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  left: -1px;
  position: absolute;
  top: 38px;
  width: 200px;
`;

export const Item = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid gray;
    color: black;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    outline: none;
    width: 200px;
`;

export const ListItem = styled(Link)`
    align-items: center;
    background-color: white;
    border: 1px solid gray;
    color: black;
    cursor: pointer;
    display: flex;
    height: 40px;
    justify-content: center;
    outline: none;
    text-decoration: none;
    width: 200px;
`;
