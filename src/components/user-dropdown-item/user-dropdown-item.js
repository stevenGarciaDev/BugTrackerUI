import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    border: 1px solid gray;
    height: 40px;
    position: absolute;
    top: 50px;
    width: 190px;
`;

const UserDropdownItem = () => (
  <Item>Sign Out</Item>
);

export default UserDropdownItem;
