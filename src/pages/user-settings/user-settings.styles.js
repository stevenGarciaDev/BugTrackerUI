import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #ccc;
  margin: 20px;
  padding: 20px;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 800px;
`;

export const Title = styled.h1`
  color: #364a63;
  font-size: 24px;
  text-align: center;
`;

export const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserInfoTitle = styled.h2`
  color: #8094ae;
  font-size: 14px;
`;

export const UploadImageButton = styled.button`
  background-color: #6576ff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 13px;
  outline: none;
  padding: 0px 10px;
`;

export const UserInfo = styled.h3`
  color: black;
  font-size: 14px;
`;
