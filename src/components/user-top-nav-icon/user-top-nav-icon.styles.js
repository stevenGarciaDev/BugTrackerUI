import styled from 'styled-components';
import { MdAccountCircle } from 'react-icons/md';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export const Container = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  float: right;
  height: 40px;
  outline: none;
  padding: 5px;
  position: relative;
  width: 200px;

  @media screen and (min-width: 800px) {
    margin-right: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 60px;
  }
`;

export const AccountIcon = styled(MdAccountCircle)`
  color: #171A40;
  font-size: 40px;
  right: 7px;
  position: relative;
`;

export const ImageIcon = styled.div`
  background-color: dodgerblue;
  border: 1px solid #ccc;
  border-radius: 50%;
  height: 30px;
  margin-right: 10px;
  width: 30px;
`;

export const UpIcon = styled(ArrowDropUpIcon)`
  margin: 0;
  padding: 0;
  position: relative;
  top: 7px;
`;

export const DownIcon = styled(ArrowDropDownIcon)`
  margin: 0;
  padding: 0;
  position: relative;
  top: 7px;
`;

export const IconText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const JobTitle = styled.p`
  color: #798bff;
  font-size: 15px;
  font-weight: bold;
  position: relative;
  top: 18px;
`;

export const Name = styled.p`
  color: #526484;
  font-size: 14px;
  font-weight: bold;
  position: relative;
  top: -20px;
`;
