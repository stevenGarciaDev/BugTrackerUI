/* eslint-disable no-console */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserDropdown from '../user-dropdown';
import { Container, Name } from './user-top-nav-icon.styles';
import { selectUserName } from '../../store/user/user.selector';

const UserTopNavIcon = ({ userName }) => {
  const [isDisplayingDropdown, setDropdownStatus] = useState(false);

  const determineUsernameToDisplay = (name) => {
    const maxCharactersToDisplay = 18;
    let nameToDisplay = name;
    if (nameToDisplay && nameToDisplay.length > maxCharactersToDisplay) {
      nameToDisplay = `${name.slice(0, maxCharactersToDisplay - 3)}...`;
    }
    return nameToDisplay;
  };

  return (
    <Container onClick={() => setDropdownStatus(!isDisplayingDropdown)}>
      <Name>{determineUsernameToDisplay(userName)}</Name>
      { isDisplayingDropdown && <UserDropdown /> }
    </Container>
  );
};

const mapStateToProps = (state) => ({
  userName: selectUserName(state),
});

UserTopNavIcon.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(UserTopNavIcon);
