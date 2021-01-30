/* eslint-disable react/no-unescaped-entities */
import React from 'react';
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
  UserButtonLink,
} from './landing-page.styles';

const LandingPage = () => (
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
          <UserTypeContainer>
            <UserType>Project Manager</UserType>
            <UserAccess>Project Access</UserAccess>
            <UserDescription>
              Focused on the big picture with access to creating projects and tickets.
            </UserDescription>
            <DemoButtonContainer>
              <UserButtonLink to="/login">Demo</UserButtonLink>
            </DemoButtonContainer>
          </UserTypeContainer>
        </DemoUsersContainer>
      </SectionContent>
    </DemoSection>
  </div>
);

export default LandingPage;
