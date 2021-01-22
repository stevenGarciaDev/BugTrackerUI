import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
import { login } from '../../store/user/user.actions';

const Login = ({ performLogin }) => {
  const [loginForm, setLoginForm] = useState({
    Email: '',
    Password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await performLogin(loginForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const { Email, Password } = loginForm;
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Title>Welcome back</Title>
        <InputControl>
          <Label>Email</Label>
          <Input type="text" name="Email" value={Email} onChange={(e) => handleChange(e)} />
        </InputControl>
        <InputControl>
          <Label>Password</Label>
          <Input type="password" name="Password" value={Password} onChange={(e) => handleChange(e)} />
        </InputControl>
        <ButtonContainer>
          <Button>Login</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  performLogin: (loginForm) => dispatch(login(loginForm)),
});

Login.propTypes = {
  performLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
