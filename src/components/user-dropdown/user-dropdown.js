import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from '../../store/user/user.actions';
import { Container, Item } from './user-dropdown.styles';

const UserDropdown = ({ signOutUser }) => (
  <Container>
    <Item onClick={() => signOutUser()}>Sign Out</Item>
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOut()),
});

UserDropdown.propTypes = {
  signOutUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UserDropdown);
