import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100% - 50px);
  justify-content: center;
  position: absolute;
  top: 60px;
  width: 100%;
`;

export const Form = styled.form`
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const ErrorMessage = styled.h2`
  color: red;
  font-size: 18px;
  font-style: italic;
  text-align: center;
`;

export const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const Label = styled.label`

`;

export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  height: 35px;
  outline: none;
  margin-top: 5px;
  padding: 5px;
  width: 230px;

  @media screen and (min-width: 400px) {
    width: 350px;
  }

  @media screen and (min-width: 500px) {
    width: 400px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
