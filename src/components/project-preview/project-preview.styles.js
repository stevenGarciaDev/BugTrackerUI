import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const Project = styled.div`
    position: relative;
`;

export const Container = styled.div`
    border: 1px solid #ccc;
    padding: 15px;
`;

export const ProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProjectInfo = styled.div`
    display: flex;
`;

export const TitleContainer = styled.div`
    margin-left: 10px;
`;

export const ProjectColorIdentifier = styled.div`
    background-color: coral;
    border-radius: 5px;
    height: 40px;
    width: 40px;
`;

export const Title = styled.h1`
    font-size: 18px;
    margin: 0;
`;

export const Date = styled.h2`
    color: #8094ae;
    font-size: 13px;
    margin-top: 5px;
`;

export const Description = styled.p`
    color: #526484;
    font-size: 14px;
`;

export const ProjectMemberImage = styled.div`
    background-color: dodgerblue;
    border-radius: 50%;
    color: white;
    font-size: 14px;
    height: 30px;
    padding-top: 6px;
    text-align: center;
    width: 30px;
`;

export const OptionsIcon = styled(MoreHorizIcon)`
  cursor: pointer;
`;
