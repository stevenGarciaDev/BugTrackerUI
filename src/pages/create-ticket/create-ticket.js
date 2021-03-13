/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FormContainer, Form, InputContainer, Input, Textarea, Button, SuccessMessage,
} from '../../styles/forms/forms.style';
import { Select } from './create-ticket.styles';
import PageHeadline from '../../styles/page-headline.style';
import { ErrorMessage } from '../login/login.styles';
import { getProjects } from '../../store/project/project.actions';
import { selectUserToken, selectCurrentUserId } from '../../store/user/user.selector';
import { selectUserProjects } from '../../store/project/project.selector';
import { setTicketErrorMessage, setTicketSuccessMessage, createNewTicket } from '../../store/ticket/ticket.actions';
import { getTicketErrorMessage, getTicketSuccessMessage } from '../../store/ticket/ticket.selector';
import areAllFieldsFilledOut from '../../helpers/areAllFieldsFilledOut';

const CreateTicket = ({
  initializeProjects, userProjects, userId, jwt, setError, errorMessage,
  createProjectTicket, successMessage, setSuccessMessage,
}) => {
  const [ticketForm, setTicketForm] = useState({
    title: '',
    description: '',
    projectName: '',
    type: '',
    priority: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (areAllFieldsFilledOut(ticketForm)) {
      await createProjectTicket(ticketForm, userId, jwt);
    } else {
      setError('Please fill out all the required forms.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTicketForm({
      ...ticketForm,
      [name]: value,
    });
  };

  useEffect(() => {
    initializeProjects(userId, jwt);
    setError('');
    setSuccessMessage('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    title,
    description,
    projectName,
    type,
    priority,
  } = ticketForm;
  return (
    <div>
      {userProjects.length === 0
        ? <PageHeadline>You must create a project before making a ticket.</PageHeadline>
        : (
          <>
            <PageHeadline>Create a New Ticket</PageHeadline>
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {!successMessage
            && (
            <FormContainer>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <InputContainer>
                  <label htmlFor="title">Title</label>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                </InputContainer>
                <InputContainer>
                  <label htmlFor="description">Description</label>
                  <Textarea type="text" id="description" name="description" value={description} onChange={(e) => handleChange(e)} />
                </InputContainer>
                <InputContainer>
                  <label htmlFor="projectName">Project</label>
                  <Select
                    id="projectName"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => handleChange(e)}
                  >
                    <option disabled>{' '}</option>
                    {userProjects.length > 0
                    && userProjects.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </Select>
                </InputContainer>
                <InputContainer>
                  <label htmlFor="type">Ticket Type</label>
                  <Select id="type" name="type" value={type} onChange={(e) => handleChange(e)}>
                    <option disabled>{' '}</option>
                    <option value="UI">UI</option>
                    <option value="Backend">Backend</option>
                    <option value="Devops">Devops</option>
                  </Select>
                </InputContainer>
                <InputContainer>
                  <label htmlFor="priority">Ticket Priority</label>
                  <Select id="priority" name="priority" value={priority} onChange={(e) => handleChange(e)}>
                    <option disabled>{' '}</option>
                    <option value="Pending">Pending</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </Select>
                </InputContainer>
                <Button type="submit">Create Ticket</Button>
              </Form>
            </FormContainer>
            )}
          </>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userProjects: selectUserProjects(state),
  userId: selectCurrentUserId(state),
  jwt: selectUserToken(state),
  errorMessage: getTicketErrorMessage(state),
  successMessage: getTicketSuccessMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  initializeProjects: (userId, jwt) => dispatch(getProjects(userId, jwt)),
  setError: (message) => dispatch(setTicketErrorMessage(message)),
  setSuccessMessage: (message) => dispatch(setTicketSuccessMessage(message)),
  createProjectTicket: (ticketForm, userId, jwt) => (
    dispatch(createNewTicket(ticketForm, userId, jwt))
  ),
});

CreateTicket.propTypes = {
  initializeProjects: PropTypes.func.isRequired,
  createProjectTicket: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setSuccessMessage: PropTypes.func.isRequired,
  userProjects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  userId: PropTypes.number.isRequired,
  jwt: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTicket);
