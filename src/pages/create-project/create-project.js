/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form, InputContainer, Input, Textarea, Button,
} from './create-project.styles';
import PageHeadline from '../../styles/page-headline.style';
import { createProjectAsync } from '../../store/project/project.actions';
import { selectUserToken, selectCurrentUserId } from '../../store/user/user.selector';
import ProjectMemberInput from '../../components/add-project-member-input';
import { ErrorMessage } from '../login/login.styles';

const CreateProject = ({ createNewProject, jwt, userId }) => {
  const [projectForm, setProjectForm] = useState({
    name: '',
    description: '',
    members: [],
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewProject({ ...projectForm, UserId: userId }, jwt);
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

  const { name, description, members } = projectForm;
  return (
    <div>
      <PageHeadline>Create a New Project</PageHeadline>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: selectCurrentUserId(state),
  jwt: selectUserToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  createNewProject: (form, jwt) => dispatch(createProjectAsync(form, jwt)),
});

CreateProject.propTypes = {
  userId: PropTypes.number.isRequired,
  jwt: PropTypes.string.isRequired,
  createNewProject: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
