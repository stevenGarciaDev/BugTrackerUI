import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid gray;
    display: flex;
    height: 40px;
    justify-content: center;
    left: -1px;
    position: absolute;
    top: 38px;
    width: 200px;
`;

const UserDropdownItem = () => (
  <Item>Sign Out</Item>
);

export default UserDropdownItem;
