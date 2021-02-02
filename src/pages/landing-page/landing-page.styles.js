import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.section`
    align-items: center;
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 30px 50px;
`;

export const Title = styled.h1`
    font-family: ${(props) => props.theme.font.family.headline};
    font-size: 22px;
    text-align: center;

    @media screen and (min-width: 800px) {
        font-size: 28px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 19px;

    @media screen and (min-width: 800px) {
        font-size: 25px;
    }
`;

export const Paragraph = styled.p`
    font-size: 17px;

    @media screen and (min-width: 800px) {
        font-size: 22px;
    }
`;

export const ButtonLink = styled(Link)`
    background-color: ${(props) => props.theme.colors.lightBlue};
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    width: 120px;
`;

export const TicketSection = styled.section`
    padding: 20px 10px;

    @media screen and (min-width: 1000px) {
        margin: 0 auto;
        width: 80%;
    }
`;

export const DashboardSection = styled.section`
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
    padding: 20px 10px;
`;

export const SectionContent = styled.div`
    @media screen and (min-width: 1000px) {
        margin: 0 auto;
        width: 80%;
    }
`;

export const ProjectSection = styled.section`
    padding: 20px 10px;

    @media screen and (min-width: 1000px) {
        margin: 0 auto;
        width: 80%;
    }
`;

export const DemoSection = styled.section`
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
    padding: 20px 10px;
    text-align: center;
    z-index: 0;
`;

export const DemoUsersContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        justify-content: center;
        margin-top: 40px;
    }
`;

export const UserTypeContainer = styled.div`
    border: 1px solid white;
    border-radius: 5px;
    flex: 1;
    margin: 0 10px 30px;
    padding: 10px;
    position: relative;
    text-align: center;
    max-width: 400px;

    @media screen and (min-width: 1000px) {
        padding-top: 80px;
        height: 450px;
    }
`;

export const UserType = styled.h2`

`;

export const UserAccess = styled.h3`

`;

export const UserDescription = styled.p`

`;

export const DemoButtonContainer = styled.div`
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

export const UserButtonDemoLogin = styled.button`
    background-color: ${(props) => props.theme.colors.lightBlue};
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    display: block;
    margin: 10px auto;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    width: 120px;
`;
