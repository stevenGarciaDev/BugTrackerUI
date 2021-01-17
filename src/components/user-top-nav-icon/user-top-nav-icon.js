import React from 'react';
import styled from 'styled-components';
import UserDropdownItem from '../user-dropdown-item';

const Container = styled.button`
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  float: right;
  height: 40px;
  margin-right: 20px;
  outline: none;
  padding: 5px;
  width: 200px;
`;

const ImageIcon = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  height: 30px;
  margin-right: 5px;
  width: 30px;
`;

const UserTopNavIcon = () => (
  <Container>
    <ImageIcon />
    UserTopNavIcon
    <UserDropdownItem />
  </Container>
);

export default UserTopNavIcon;
