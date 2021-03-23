import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    color: black;
    margin-bottom: 0px;
`;

export const Table = styled.table`
    border-collapse: collapse;
    border: 1px solid #ccc;
    color: black;
    font-size: 14px;
    text-align: left;
    width: 100%;
`;

export const TableRow = styled.tr`
    border: 1px solid #ccc;
    height: 45px;
`;

export const TableHeadData = styled.th`
    color: #8094ae;
    text-align: center;
`;

export const TableData = styled.td`
    border: 1px solid #ccc;
    text-align: center;
`;

export const Column = styled.col`
    width: ${(props) => props.width};
`;

export const Button = styled(Link)`
    background-color: #6576ff;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    height: 35px;
    padding: 7px 20px;
    text-decoration: none;
`;
