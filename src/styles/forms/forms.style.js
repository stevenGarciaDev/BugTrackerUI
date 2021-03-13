import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  height: 35px;
  margin-top: 5px;
  outline: none;
  padding: 5px;
`;

export const Textarea = styled.textarea`
  border-radius: 5px;
  margin-top: 5px;
  height: 70px;
  outline: none;
  padding: 5px;
`;

export const Button = styled.button`
  background-color: #6576ff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  height: 45px;
  margin-top: 10px;
  outline: 0;
  width: 150px;

  &:hover {
      background-color: #3d54ff;
  }
`;

export const SuccessMessage = styled.h2`
  color: green;
  font-size: 18px;
  font-style: italic;
  text-align: center;
`;
