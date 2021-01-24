import React, { useState, useEffect } from 'react';
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
  ErrorMessage,
} from './login.styles';
import { login, setErrorMessage } from '../../store/user/user.actions';
import { selectUserError } from '../../store/user/user.selector';
import areAllFieldsFilledOut from '../../helpers/areAllFieldsFilledOut';

const Login = ({ performLogin, setError, formError }) => {
  const [loginForm, setLoginForm] = useState({
    Email: '',
    Password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (areAllFieldsFilledOut(loginForm)) {
      await performLogin(loginForm);
    } else {
      setError('Not all form fields are filled out.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  useEffect(() => {
    setError('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { Email, Password } = loginForm;
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Title>Welcome back</Title>
        {formError && <ErrorMessage>{formError}</ErrorMessage>}
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

const mapStateToProps = (state) => ({
  formError: selectUserError(state),
});

const mapDispatchToProps = (dispatch) => ({
  performLogin: (loginForm) => dispatch(login(loginForm)),
  setError: (message) => dispatch(setErrorMessage(message)),
});

Login.defaultProps = {
  formError: '',
};

Login.propTypes = {
  formError: PropTypes.string,
  performLogin: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
