/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form, InputContainer, Input, Textarea, Button, SuccessMessage,
} from './create-project.styles';
import PageHeadline from '../../styles/page-headline.style';
import { createProjectAsync, setProjectSuccessMessage } from '../../store/project/project.actions';
import { selectUserToken, selectCurrentUserId } from '../../store/user/user.selector';
import ProjectMemberInput from '../../components/add-project-member-input';
import { ErrorMessage } from '../login/login.styles';
import { selectProjectSuccessMessage } from '../../store/project/project.selector';

const CreateProject = ({
  createNewProject, jwt, userId, successMessage, setSuccessMessage,
}) => {
  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    members: [],
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {!successMessage
        && (
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
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: selectCurrentUserId(state),
  jwt: selectUserToken(state),
  successMessage: selectProjectSuccessMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  createNewProject: (form, jwt) => dispatch(createProjectAsync(form, jwt)),
  setSuccessMessage: (msg) => dispatch(setProjectSuccessMessage(msg)),
});

CreateProject.propTypes = {
  userId: PropTypes.number.isRequired,
  jwt: PropTypes.string.isRequired,
  createNewProject: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  setSuccessMessage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
