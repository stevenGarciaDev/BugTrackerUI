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
} from '../login/login.styles';
import { Select } from '../create-ticket/create-ticket.styles';
import { selectUserError } from '../../store/user/user.selector';
import { register, setErrorMessage } from '../../store/user/user.actions';
import areAllFieldsFilledOut from '../../helpers/areAllFieldsFilledOut';

const Register = ({ performRegistration, setError, formError }) => {
  const [registerForm, setRegisterForm] = useState({
    UserName: '',
    Email: '',
    JobTitle: 'Project Manager',
    Password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!areAllFieldsFilledOut(registerForm)) {
      setError('Not all form fields are filled out.');
    }

    const minPasswordLength = 6;
    if (registerForm.Password.length >= minPasswordLength) {
      await performRegistration(registerForm);
    } else {
      setError('Password must be 6 characters or more');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  useEffect(() => {
    setError('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    UserName,
    Email,
    JobTitle,
    Password,
  } = registerForm;
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Title>Create an account</Title>
        {formError && <ErrorMessage>{formError}</ErrorMessage>}
        <InputControl>
          <Label>Username</Label>
          <Input type="text" value={UserName} name="UserName" onChange={(e) => handleChange(e)} />
        </InputControl>
        <InputControl>
          <Label>Email</Label>
          <Input type="email" value={Email} name="Email" onChange={(e) => handleChange(e)} />
        </InputControl>
        <InputControl>
          <Label>Job Title</Label>
          <Select type="text" value={JobTitle} name="JobTitle" onChange={(e) => handleChange(e)}>
            <option value="Manager">Project Manager</option>
            <option value="Developer">Developer</option>
          </Select>
        </InputControl>
        <InputControl>
          <Label>Password</Label>
          <Input type="password" value={Password} name="Password" onChange={(e) => handleChange(e)} />
        </InputControl>
        <ButtonContainer>
          <Button>Register</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  formError: selectUserError(state),
});

const mapDispatchToProps = (dispatch) => ({
  performRegistration: (registerForm) => dispatch(register(registerForm)),
  setError: (message) => dispatch(setErrorMessage(message)),
});

Register.defaultProps = {
  formError: '',
};

Register.propTypes = {
  formError: PropTypes.string,
  performRegistration: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
