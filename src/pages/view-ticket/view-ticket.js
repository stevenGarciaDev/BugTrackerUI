/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectUserToken } from '../../store/user/user.selector';
import { getTicketErrorMessage, getTicketSuccessMessage } from '../../store/ticket/ticket.selector';
import { updateProjectTicket, setTicketSuccessMessage, setTicketErrorMessage } from '../../store/ticket/ticket.actions';
import { getTicket } from '../../services/ticketService';
import { getMembersForProject } from '../../services/projectService';
import { Form, InputContainer, Button } from '../../styles/forms/forms.style';
import { Select } from '../create-ticket/create-ticket.styles';
import {
  Container, Headline, TicketInfoContainer, TicketInfo,
  SuccessMessage, ErrorMessage,
} from './view-ticket.styles';
import areAllFieldsFilledOut from '../../helpers/areAllFieldsFilledOut';

const ViewTicket = ({
  match, jwt, saveTicketEdit, successMessage, errorMessage, setSuccessMessage, setErrorMessage,
}) => {
  const { ticketId, projectId } = match.params;
  const [ticket, setTicket] = useState(undefined);
  const [members, setMembers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!areAllFieldsFilledOut(ticket)) {
      setSuccessMessage('');
      setErrorMessage('Please ensure the ticket is assigned to a user.');
      return;
    }
    await saveTicketEdit(ticket, ticketId, jwt);
  };

  const handleChangeToTicket = (event) => {
    const { name, value } = event.target;

    if (name === 'userName') {
      const assignedUser = members.find((m) => m.userName === value);
      setTicket({
        ...ticket,
        userId: assignedUser.id,
        [name]: value,
      });
      return;
    }

    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  useEffect(() => {
    async function initializeTicket() {
      const retrievedTicket = await getTicket(ticketId, jwt);
      setTicket(retrievedTicket);
    }
    async function initializeMembers() {
      const projectMembers = await getMembersForProject(projectId, jwt);
      setMembers(projectMembers);
    }
    setErrorMessage('');
    setSuccessMessage('');
    initializeTicket();
    initializeMembers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {ticket
        ? (
          <div>
            <Headline>Edit Ticket</Headline>
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <TicketInfoContainer>
              <TicketInfo>
                <strong>Ticket Name:</strong>
                {' '}
                {ticket.title}
              </TicketInfo>
              <TicketInfo>
                <strong>Description:</strong>
                {' '}
                {ticket.description}
              </TicketInfo>
            </TicketInfoContainer>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <InputContainer>
                <label htmlFor="type">Ticket Type</label>
                <Select
                  id="type"
                  name="type"
                  value={ticket.type}
                  onChange={(e) => handleChangeToTicket(e)}
                >
                  <option disabled>{' '}</option>
                  <option value="UI">UI</option>
                  <option value="Backend">Backend</option>
                  <option value="Devops">Devops</option>
                </Select>
              </InputContainer>

              <InputContainer>
                <label htmlFor="priority">Ticket Priority</label>
                <Select
                  id="priority"
                  name="priority"
                  value={ticket.priority}
                  onChange={(e) => handleChangeToTicket(e)}
                >
                  <option disabled>{' '}</option>
                  <option value="Pending">Pending</option>
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </Select>
              </InputContainer>

              <InputContainer>
                <label htmlFor="status">Ticket Status</label>
                <Select
                  id="status"
                  name="status"
                  value={ticket.status}
                  onChange={(e) => handleChangeToTicket(e)}
                >
                  <option disabled>{' '}</option>
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </Select>
              </InputContainer>

              <InputContainer>
                <label htmlFor="userName">Assigned To</label>
                <Select
                  id="userName"
                  name="userName"
                  value={ticket.userName}
                  onChange={(e) => handleChangeToTicket(e)}
                >
                  <option>{' '}</option>
                  {members.length > 0
                  && members.map((m) => (
                    <option key={m.id} value={m.userName}>{m.userName}</option>
                  ))}
                </Select>
              </InputContainer>

              <Button type="submit">Update Ticket</Button>
            </Form>
          </div>
        )
        : <Headline>Ticket information not available.</Headline>}
    </Container>
  );
};

ViewTicket.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.number.isRequired,
      ticketId: PropTypes.number.isRequired,
    }),
  }).isRequired,
  jwt: PropTypes.string.isRequired,
  saveTicketEdit: PropTypes.func.isRequired,
  setSuccessMessage: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  jwt: selectUserToken(state),
  successMessage: getTicketSuccessMessage(state),
  errorMessage: getTicketErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  saveTicketEdit: (ticket, ticketId, jwt) => dispatch(updateProjectTicket(ticket, ticketId, jwt)),
  setSuccessMessage: (msg) => dispatch(setTicketSuccessMessage(msg)),
  setErrorMessage: (msg) => dispatch(setTicketErrorMessage(msg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewTicket);
