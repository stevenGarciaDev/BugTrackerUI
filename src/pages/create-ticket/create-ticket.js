/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Form, InputContainer, Input, Textarea, Button,
} from '../create-project/create-project.styles';
import { Select } from './create-ticket.styles';

const CreateTicket = () => {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    description: '',
    projectTitle: '',
    ticketType: '',
    ticketPriority: '',
    ticketStatus: '',
    assignedDeveloper: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTicketForm({
      ...ticketForm,
      [name]: value,
    });
  };

  const {
    name,
    description,
    projectTitle,
    ticketType,
    ticketPriority,
    ticketStatus,
    assignedDeveloper,
  } = ticketForm;
  return (
    <div>
      <h2>Create a New Ticket</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <InputContainer>
          <label htmlFor="name">Title</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Description</label>
          <Textarea type="text" id="description" name="description" value={description} onChange={(e) => handleChange(e)} />
        </InputContainer>

        <InputContainer>
          <label htmlFor="projectTitle">Project</label>
          <Select type="text" id="projectTitle" name="projectTitle" value={projectTitle} onChange={(e) => handleChange(e)}>
            <option value="Project 1">1</option>
            <option value="Project 1">2</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="ticketType">Ticket Type</label>
          <Select type="text" id="ticketType" name="ticketType" value={ticketType} onChange={(e) => handleChange(e)}>
            <option value="UI">UI</option>
            <option value="Backend">Backend</option>
            <option value="Devops">Devops</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="ticketPriority">Ticket Priority</label>
          <Select type="text" id="ticketPriority" name="ticketPriority" value={ticketPriority} onChange={(e) => handleChange(e)}>
            <option value="Pending">Pending</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
            <option value="Urgent">Urgent</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Ticket Status</label>
          <Select type="text" id="description" name="ticketStatus" value={ticketStatus} onChange={(e) => handleChange(e)}>
            <option value="New">New</option>
            <option value="Reviewed">Reviewed</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </Select>
        </InputContainer>

        <InputContainer>
          <label htmlFor="assignedDeveloper">Assigned Developer</label>
          <Select type="text" id="assignedDeveloper" name="assignedDeveloper" value={assignedDeveloper} onChange={(e) => handleChange(e)}>
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
