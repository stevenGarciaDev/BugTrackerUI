/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectMemberCard from '../project-member-card';
import {
  Container,
  AddMemberInput,
  AddMemberButton,
  MembersContainer,
} from './add-project-member-input.styles';
import { getByUsername } from '../../services/userService';
import { selectUserName } from '../../store/user/user.selector';

const ProjectMemberInput = ({
  members, addMember, removeMember, setErrorMessage, userName,
}) => {
  const [memberName, setMemberName] = useState('');

  const handleAddingNewMember = async () => {
    if (memberName === '') return;
    if (memberName.toLowerCase() === userName.toLowerCase()) {
      setErrorMessage('You are already added to the project.');
      return;
    }
    const newMember = await getByUsername(memberName);
    if ('error' in newMember) {
      setErrorMessage(newMember.message);
      return;
    }
    addMember(newMember);
    setMemberName('');
  };

  return (
    <Container>
      <label htmlFor="member">Add Project Members</label>
      <AddMemberInput
        id="member"
        type="text"
        name="memberName"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
      />
      <AddMemberButton type="button" onClick={() => handleAddingNewMember()}>Add</AddMemberButton>
      <MembersContainer>
        {members && members.map((m) => (
          <ProjectMemberCard
            key={m.id}
            name={m.userName}
            removeMember={removeMember}
          />
        ))}
      </MembersContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  userName: selectUserName(state),
});

ProjectMemberInput.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    userName: PropTypes.string,
  })).isRequired,
  addMember: PropTypes.func.isRequired,
  removeMember: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ProjectMemberInput);
