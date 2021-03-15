import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Headline = styled.h2`
    color: grey;
    font-size: 25px;
    text-align: center;
`;

export const TicketInfoContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const TicketInfo = styled.p`
    margin-top: 5px;
`;

export const SuccessMessage = styled.h2`
    color: green;
    font-size: 20px;
    font-style: italic;
    text-align: center;
`;

export const ErrorMessage = styled.h2`
    color: red;
    font-size: 20px;
    font-style: italic;
    text-align: center;
`;
