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
} from '../login/login.styles';

const Register = () => (
  <Container>
    <Form>
      <Title>Create an account</Title>
      <InputControl>
        <Label>Username</Label>
        <Input type="text" />
      </InputControl>
      <InputControl>
        <Label>Email</Label>
        <Input type="text" />
      </InputControl>
      <InputControl>
        <Label>Password</Label>
        <Input type="password" />
      </InputControl>
      <ButtonContainer>
        <Button>Register</Button>
      </ButtonContainer>
    </Form>
  </Container>
);

export default Register;
