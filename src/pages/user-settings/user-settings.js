import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container, Title, UserItem, UserInfo, UserInfoTitle,
} from './user-settings.styles';
import { selectUser } from '../../store/user/user.selector';

const UserSettings = ({ user }) => {
  const {
    userName, email, jobTitle,
  } = user;
  return (
    <Container>
      <Title>User Information</Title>
      <hr />
      <UserItem>
        <UserInfoTitle>Username</UserInfoTitle>
        <UserInfo>{userName}</UserInfo>
      </UserItem>
      <UserItem>
        <UserInfoTitle>Email</UserInfoTitle>
        <UserInfo>{email}</UserInfo>
      </UserItem>
      <UserItem>
        <UserInfoTitle>Job Title</UserInfoTitle>
        <UserInfo>{jobTitle}</UserInfo>
      </UserItem>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: selectUser(state),
});

UserSettings.propTypes = {
  user: PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(UserSettings);
