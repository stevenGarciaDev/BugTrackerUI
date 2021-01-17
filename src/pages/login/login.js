import React from 'react';
import {
  Button,
} from '../create-project/create-project.styles';
import {
  Container,
  Form,
  Title,
  InputControl,
  Label,
  Input,
  ButtonContainer,
} from './login.styles';

const Login = () => (
  <Container>
    <Form>
      <Title>Welcome back</Title>
      <InputControl>
        <Label>Email</Label>
        <Input type="text" />
      </InputControl>
      <InputControl>
        <Label>Password</Label>
        <Input type="password" />
      </InputControl>
      <ButtonContainer>
        <Button>Login</Button>
      </ButtonContainer>
    </Form>
  </Container>
);

export default Login;
