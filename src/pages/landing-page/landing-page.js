/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Header,
  Title,
  Paragraph,
  ButtonLink,
  TicketSection,
  SectionContent,
  DemoSection,
  DemoUsersContainer,
  UserTypeContainer,
  UserType,
  UserAccess,
  UserDescription,
  DemoButtonContainer,
  UserButtonDemoLogin,
} from './landing-page.styles';
import { login } from '../../store/user/user.actions';
import LoadingSpinner from '../../components/loading-spinner';
import { startLoadingAnimation } from '../../store/loading/loading.actions';
import { selectLoadingStatus } from '../../store/loading/loading.selector';

const LandingPage = ({
  performDemoLogin, startLoading, isLoading,
}) => {
  const handleDemoLogin = async () => {
    startLoading();
    await performDemoLogin({
      Email: 'demouser623@gmail.com',
      Password: '$chocolate1',
    });
  };

  return (
    <div>
      <Header>
        <Title>Track bugs. Track Solutions</Title>
        <Paragraph>
          An easy-to-use bug tracking application designed for teams.
          Easily create projects and tickets.
        </Paragraph>
        <ButtonLink as="a" href="#demo">DEMO</ButtonLink>
      </Header>
      <TicketSection>
        <Title>Tickets - Where It All Begins</Title>
        <Paragraph>
          Tickets are the core of the application. Every approved member can
          create tickets, allowing for problems to become trackable faster.
        </Paragraph>
      </TicketSection>
      <DemoSection id="demo">
        <SectionContent>
          <Title>One-Click Demo</Title>
          <Paragraph>Login as a demo user to take a peak around, no sign in required!</Paragraph>
          <DemoUsersContainer>
            {isLoading ? <LoadingSpinner />
              : (
                <UserTypeContainer>
                  <UserType>Project Manager</UserType>
                  <UserAccess>Project Access</UserAccess>
                  <UserDescription>
                    Focused on the big picture with access to creating projects and tickets.
                  </UserDescription>
                  <DemoButtonContainer>
                    <UserButtonDemoLogin
                      onClick={() => handleDemoLogin()}
                    >
                      Demo
                    </UserButtonDemoLogin>
                  </DemoButtonContainer>
                </UserTypeContainer>
              )}
          </DemoUsersContainer>
        </SectionContent>
      </DemoSection>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: selectLoadingStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  performDemoLogin: (demoUser) => dispatch(login(demoUser)),
  startLoading: () => dispatch(startLoadingAnimation()),
});

LandingPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  performDemoLogin: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
