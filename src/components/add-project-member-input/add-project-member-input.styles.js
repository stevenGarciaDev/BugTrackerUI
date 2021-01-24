import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    position: relative;
`;

export const AddMemberInput = styled.input`
    border: 1px solid gray;
    border-radius: 5px;
    height: 35px;
    outline: none;
    margin-top: 5px;
    padding: 5px;
    width: 100%;
`;

export const AddMemberButton = styled.button`
    background-color: green;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    cursor: pointer;
    outline: none;
    position: absolute;
    height: 35px;
    right: 0;
    top: 23px;
    width: 100px;
`;

export const MembersContainer = styled.div`
    margin-top: 10px;
`;
