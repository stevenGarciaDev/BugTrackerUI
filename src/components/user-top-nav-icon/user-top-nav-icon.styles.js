import styled from 'styled-components';

export const Container = styled.button`
  align-items: center;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  float: right;
  height: 40px;
  margin-right: 20px;
  outline: none;
  padding: 5px;
  position: relative;
  width: 200px;
`;

export const ImageIcon = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  height: 30px;
  margin-right: 5px;
  width: 30px;
`;

export const Name = styled.p`
  position: relative;
  left: 10px;
`;
