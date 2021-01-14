/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Form, InputContainer, Input, Textarea, Button,
} from '../create-project/create-project.styles';
import { Select } from './create-ticket.styles';

const CreateTicket = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
      <h2>Create a New Ticket</h2>
      <Form>
        <InputContainer>
          <label htmlFor="name">Title</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Description</label>
          <Textarea type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Project</label>
          <Select type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
            <option value="Project 1">1</option>
            <option value="Project 1">2</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Ticket Type</label>
          <Select type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
            <option value="UI">UI</option>
            <option value="Backend">Backend</option>
            <option value="Devops">Devops</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Ticket Priority</label>
          <Select type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Ticket Status</label>
          <Select type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
            <option value="New">New</option>
            <option value="Reviewed">Reviewed</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Assigned Developer</label>
          <Select type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}>
            <option value="Project 1">Pam</option>
            <option value="Project 1">Jim</option>
          </Select>
        </InputContainer>

        <Button type="submit">Create Ticket</Button>
      </Form>
    </div>
  );
};

export default CreateTicket;
