import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.section`
    align-items: center;
    background-color: #28384c;
    color: white;
    display: flex;
    flex-direction: column;
    height: 300px;
    padding: 0 30px;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 22px;
    text-align: center;

    @media screen and (min-width: 800px) {
        font-size: 28px;
    }
`;

const Subtitle = styled.h2`
    font-size: 19px;

    @media screen and (min-width: 800px) {
        font-size: 25px;
    }
`;

const Paragraph = styled.p`
    font-size: 17px;

    @media screen and (min-width: 800px) {
        font-size: 22px;
    }
`;

const ButtonLink = styled(Link)`
    background-color: #6576ff;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    width: 120px;
`;

const TicketSection = styled.section`
    padding: 20px 10px;

    @media screen and (min-width: 1000px) {
        margin: 0 auto;
        width: 80%;
    }
`;

const DashboardSection = styled.section`
    background-color: #28384c;
    color: white;
    padding: 20px 10px;
`;

const SectionContent = styled.div`
    @media screen and (min-width: 1000px) {
        margin: 0 auto;
        width: 80%;
    }
`;

const ProjectSection = styled.section`
    padding: 20px 10px;

    @media screen and (min-width: 1000px) {
        margin: 0 auto;
        width: 80%;
    }
`;

const DemoSection = styled.section`
    background-color: #28384c;
    color: white;
    padding: 20px 10px;
    text-align: center;
`;

const DemoUsersContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        margin-top: 40px;
    }
`;

const UserTypeContainer = styled.div`
    border: 1px solid white;
    border-radius: 5px;
    flex: 1;
    margin: 0 10px 30px;
    padding: 10px;
    position: relative;
    text-align: center;

    @media screen and (min-width: 1000px) {
        padding-top: 80px;
        height: 450px;
    }
`;

const UserType = styled.h2`

`;

const UserAccess = styled.h3`

`;

const UserDescription = styled.p`

`;

const DemoButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (min-width: 1000px) {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 50px;
    }

    @media screen and (min-width: 1300px) {
        bottom: 80px;
    }
`;

const UserButtonLink = styled(ButtonLink)`
    display: block;
    margin: 10px auto;
`;

const LandingPage = () => (
    <div>
        <Header>
            <Title>Track bugs. Track Solutions</Title>
            <Paragraph>
                An easy-to-use bug tracking application designed for teams. 
                Easily create tickets, projects, and manage roles for secure access.
            </Paragraph>
            <ButtonLink to='/login'>DEMO</ButtonLink>
        </Header>
        <TicketSection>
            <Title>Tickets - Where It All Begins</Title>
            <Paragraph>
                Tickets are the core of the application. Every approved member can 
                create tickets, allowing for problems to become trackable faster.
            </Paragraph>
            <Title>
                Ticket attachments, comments, complete change history...
            </Title>
            <Paragraph>
                On every ticket, your team can communicate easily with comments and attachments 
                to expand on the software issue. <br /><br />
                Each ticket contains a log of all changes made to that ticketare stored so that they 
                can be referenced later if needed.
            </Paragraph>
        </TicketSection>
        <DashboardSection>
            <SectionContent>
                <Title>Dashboard - The Big Picture</Title>
                <Paragraph>
                    Upon first logging in, every user is greeted with a dashboard.
                    Here you can view the overall health of your projects with graphics,
                    as well as an action center to make team members awaire of the priorities.
                </Paragraph>
                <Subtitle>Ticket Timeline</Subtitle>
                <Paragraph>
                    View the trends by day to see when tickets are created vs when they are resolved.
                </Paragraph>
                <Subtitle>Tickets by Type</Subtitle>
                <Paragraph>
                    See the latest data on where your ticket types are stacking up. Frontend, Backend, etc. 
                    - focus where help is needed.
                </Paragraph>
                <Subtitle>Tickets by Status</Subtitle>
                <Paragraph>
                    Are there high amounts of tickets in the pending status? Here's where you'd see it.
                </Paragraph>
            </SectionContent>
        </DashboardSection>
        <ProjectSection>
            <Title>Projects - the organization and management of your software</Title>
            <Paragraph>
                Organize your development needs into projects. These projects each contain their own assigned projected 
                manager, developer, and submitter.
            </Paragraph>
            <Paragraph>Much like the dashboard, every project contains data visualized through graphs.</Paragraph>
        </ProjectSection>
        <DemoSection>
            <SectionContent>
            <Title>One-Click Demo</Title>
            <Paragraph>Login as a demo user to take a peak around, no sign in required!</Paragraph>
            <DemoUsersContainer>
                <UserTypeContainer>
                    <UserType>Admin</UserType>
                    <UserAccess>Unlimited Access</UserAccess>
                    <UserDescription>A focus on their own projects with edit access to anything at the project level.</UserDescription>
                    <DemoButtonContainer>
                        <UserButtonLink to="/login">Demo</UserButtonLink>
                    </DemoButtonContainer>
                </UserTypeContainer>
                <UserTypeContainer>
                    <UserType>Project Manager</UserType>
                    <UserAccess>Project Access</UserAccess>
                    <UserDescription>
                        Focused on the big picture with unlimited access to project, tickets, and users.
                    </UserDescription>
                    <DemoButtonContainer>
                        <UserButtonLink to="/login">Demo</UserButtonLink>
                    </DemoButtonContainer>
                </UserTypeContainer>
                <UserTypeContainer>
                    <UserType>Developer</UserType>
                    <UserAccess>Ticket Access</UserAccess>
                    <UserDescription>
                        A heavy focus on their own assigned tickets. Edit access restricted to their own
                        tickets in their projects.
                    </UserDescription>
                    <DemoButtonContainer>
                        <UserButtonLink to="/login">Demo</UserButtonLink>
                    </DemoButtonContainer>
                </UserTypeContainer>
                <UserTypeContainer>
                    <UserType>Submitter</UserType>
                    <UserAccess>Limited Access</UserAccess>
                    <UserDescription>
                        The strictest of access levels. Can view most things but can only interact with their own tickets.
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
