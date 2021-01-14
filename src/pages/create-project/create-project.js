/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  height: 30px;
  margin-top: 5px;
  outline: none;
  padding: 5px;
`;

const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState('');
  return (
    <div>
      <h2>Create a New Project</h2>
      <Form>
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
          <label htmlFor="description">Project Description</label>
          <Input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </InputContainer>

        <InputContainer>
          <label htmlFor="members">Project Members</label>
          <Input type="text" id="members" name="members" value={members} onChange={(e) => setMembers(e.target.value)} />
        </InputContainer>

        <button type="submit">Create Project</button>
      </Form>
    </div>
  );
};

export default CreateProject;
