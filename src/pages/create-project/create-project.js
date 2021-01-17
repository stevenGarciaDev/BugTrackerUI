/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Form, InputContainer, Input, Textarea, Button,
} from './create-project.styles';

const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Create a New Project</h2>
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

export default CreateProject;
