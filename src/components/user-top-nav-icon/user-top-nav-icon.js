import React, { useState } from 'react';
import UserDropdownItem from '../user-dropdown-item';
import { Container, ImageIcon } from './user-top-nav-icon.styles';

const UserTopNavIcon = () => {
  const [isDisplayingDropdown, setDropdownStatus] = useState(false);
  return (
    <Container onClick={() => setDropdownStatus(!isDisplayingDropdown)}>
      <ImageIcon />
      UserTopNavIcon
      { isDisplayingDropdown && <UserDropdownItem /> }
    </Container>
  );
};

export default UserTopNavIcon;
