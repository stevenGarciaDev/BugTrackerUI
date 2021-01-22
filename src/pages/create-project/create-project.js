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

const CreateProject = ({ createNewProject, jwt, userId }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewProject({ Name: name, Description: description, UserId: userId }, jwt);
  };

  return (
    <div>
      <PageHeadline>Create a New Project</PageHeadline>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <InputContainer>
          <label htmlFor="name">Project Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Short Description</label>
          <Textarea type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
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
