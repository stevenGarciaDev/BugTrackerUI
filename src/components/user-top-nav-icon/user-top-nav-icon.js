/* eslint-disable no-console */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserDropdown from '../user-dropdown';
import {
  Container, Name, JobTitle, IconText, AccountIcon,
  UpIcon, DownIcon,
} from './user-top-nav-icon.styles';
import { selectUser } from '../../store/user/user.selector';

const UserTopNavIcon = ({ user }) => {
  const [isDisplayingDropdown, setDropdownStatus] = useState(false);

  const determineUsernameToDisplay = (name) => {
    const maxCharactersToDisplay = 13;
    let nameToDisplay = name;
    if (nameToDisplay && nameToDisplay.length > maxCharactersToDisplay) {
      nameToDisplay = `${name.slice(0, maxCharactersToDisplay - 3)}...`;
    }
    return nameToDisplay;
  };

  const { userName, jobTitle } = user;
  return (
    <Container onClick={() => setDropdownStatus(!isDisplayingDropdown)}>
      <AccountIcon />
      <IconText>
        <JobTitle>{jobTitle}</JobTitle>
        <Name>
          {determineUsernameToDisplay(userName)}
          <span>{isDisplayingDropdown ? <UpIcon /> : <DownIcon /> }</span>
        </Name>
      </IconText>
      { isDisplayingDropdown && <UserDropdown /> }
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: selectUser(state),
});

UserTopNavIcon.propTypes = {
  user: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(UserTopNavIcon);
