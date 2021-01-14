import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectSidebarStatus } from './store/sidebar/sidebar.selector';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import SidebarNav from './components/sidebar-nav';
import UserTopNav from './components/user-top-nav';
import LandingPage from './pages/landing-page';
import CreateProject from './pages/create-project';
import CreateTicket from './pages/create-ticket';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import ManageRoles from './pages/manage-roles';
import Projects from './pages/projects';
import Register from './pages/register';
import ResetPassword from './pages/reset-password';
import Tickets from './pages/tickets';
import UserProfile from './pages/user-profile';
import './App.css';

const MainContent = styled.div`
  float: right;
  margin-top: 30px;
  padding: 30px;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: ${(props) => (props.isSidebarOpen ? 'calc(100% - 290px)' : '100%')};
  }
`;

function App({ isSidebarOpen }) {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <UserTopNav />
      <SidebarNav />
      <MainContent isSidebarOpen={isSidebarOpen}>
        <Switch>
          <Route path="/project/create" component={CreateProject} />
          <Route path="/ticket/create" component={CreateTicket} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/resetPassword" component={ResetPassword} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/projects" component={Projects} />
          <Route path="/manageRoles" component={ManageRoles} />
          <Route path="/userProfile" component={UserProfile} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </MainContent>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  isSidebarOpen: selectSidebarStatus(state),
});

App.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(App);
