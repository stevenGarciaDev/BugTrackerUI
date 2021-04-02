/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FormContainer, Form, InputContainer, Input, Textarea, Button, SuccessMessage,
} from '../../styles/forms/forms.style';
import PageHeadline from '../../styles/page-headline.style';
import { createProjectAsync, setProjectSuccessMessage, setProjectErrorMessage } from '../../store/project/project.actions';
import { selectUserToken, selectCurrentUserId } from '../../store/user/user.selector';
import ProjectMemberInput from '../../components/add-project-member-input';
import { ErrorMessage } from '../login/login.styles';
import { selectProjectSuccessMessage, selectProjectErrorMessage } from '../../store/project/project.selector';

const CreateProject = ({
  createNewProject, jwt, userId, successMessage, setSuccessMessage,
  errorMessage, setErrorMessage,
}) => {
  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    members: [],
  });
  const [hasSubmitted, setAsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAsSubmitted(true);
    if (projectForm.name === '' || projectForm.description === '' || projectForm.members.length === 0) {
      setErrorMessage('You must fill out all the form fields.');
      return;
    }

    const memberIds = projectForm.members.map((m) => m.id);
    const { name, description } = projectForm;

    await createNewProject({
      name, description, memberIds, UserId: userId,
    }, jwt);

    if (errorMessage === '') {
      setProjectForm({
        name: '',
        description: '',
        members: [],
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProjectForm({
      ...projectForm,
      [name]: value,
    });
  };

  const addMember = (member) => {
    const projectMembers = [member, ...projectForm.members];

    setProjectForm({
      ...projectForm,
      members: projectMembers,
    });
  };

  const removeMember = (userName) => {
    const projectMembers = projectForm.members
      .filter((m) => m.userName.toLowerCase() !== userName.toLowerCase());

    setProjectForm({
      ...projectForm,
      members: projectMembers,
    });
  };

  useEffect(() => {
    setSuccessMessage('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { name, description, members } = projectForm;
  return (
    <div>
      <PageHeadline>Create a New Project</PageHeadline>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      {(hasSubmitted && errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {!successMessage
        && (
        <FormContainer>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <InputContainer>
              <label htmlFor="name">Project Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="description">Short Description</label>
              <Textarea
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => handleChange(e)}
              />
            </InputContainer>
            <InputContainer>
              <ProjectMemberInput
                members={members}
                addMember={addMember}
                removeMember={removeMember}
                setErrorMessage={setErrorMessage}
              />
            </InputContainer>
            <Button type="submit">Create Project</Button>
          </Form>
        </FormContainer>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: selectCurrentUserId(state),
  jwt: selectUserToken(state),
  successMessage: selectProjectSuccessMessage(state),
  errorMessage: selectProjectErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  createNewProject: (form, jwt) => dispatch(createProjectAsync(form, jwt)),
  setSuccessMessage: (msg) => dispatch(setProjectSuccessMessage(msg)),
  setErrorMessage: (msg) => dispatch(setProjectErrorMessage(msg)),
});

CreateProject.propTypes = {
  userId: PropTypes.number.isRequired,
  jwt: PropTypes.string.isRequired,
  createNewProject: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  setSuccessMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
