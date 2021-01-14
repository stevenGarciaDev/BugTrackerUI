import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-bottom: 1px solid #ccc;
    height: 60px;
    width: 100%;
`;

const UserTopNav = () => (
  <Container>
    <div>Demo User</div>
  </Container>
);

export default UserTopNav;
