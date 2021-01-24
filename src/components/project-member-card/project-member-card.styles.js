import styled from 'styled-components';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const Container = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    display: inline-block;
    margin: 5px;
`;

export const Content = styled.div`
    align-items: center;
    display: flex;
    padding: 7px;
`;

export const RemoveIcon = styled(HighlightOffIcon)`
    color: black;
    cursor: pointer;
    margin-right: 5px;
`;
