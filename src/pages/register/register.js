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
} from '../login/login.styles';
import { Select } from '../create-ticket/create-ticket.styles';
import { register } from '../../store/user/user.actions';

const Register = ({ performRegistration }) => {
  const [registerForm, setRegisterForm] = useState({
    UserName: '',
    Email: '',
    JobTitle: 'Project Manager',
    Password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await performRegistration(registerForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

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

const mapDispatchToProps = (dispatch) => ({
  performRegistration: (registerForm) => dispatch(register(registerForm)),
});

Register.propTypes = {
  performRegistration: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Register);
