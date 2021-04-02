/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUserToken, selectCurrentUserId } from '../store/user/user.selector';

function withUserTokenAndID(ChildComponent) {
  class WithUserTokenAndID extends Component {
    render() {
      return (
        <>
          <ChildComponent {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = (state) => ({
    jwt: selectUserToken(state),
    userId: selectCurrentUserId(state),
  });

  return connect(mapStateToProps)(WithUserTokenAndID);
}

export default withUserTokenAndID;
