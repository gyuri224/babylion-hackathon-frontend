import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import colors from '../styles/colors';

const HomeNavBar = () => {

   const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/coffee-log'); 
  };

  const handleAttendanceClick = () => {
    navigate('/attendance-stamp');
  };

  return (
    <NavBarWrapper>

      <NavItem onClick={handleAttendanceClick} style={{ cursor: 'pointer' }}>
        <Icon icon="uil:calender" width={24} height={24} color={colors.black} />
        <Label>출석도장</Label>
      </NavItem>

      <CenterButtonWrapper onClick={handleAddClick}>
        <OuterCircle>
          <InnerCircle>
            <MdAdd size={44} color="white" />
          </InnerCircle>
        </OuterCircle>
      </CenterButtonWrapper>

      <NavItem>
        <Icon icon="mdi:water-outline" width={32} height={32} color={colors.black} />
        <Label>커피말고</Label>
      </NavItem>
    </NavBarWrapper>
  );
};

export default HomeNavBar;
const NavBarWrapper = styled.div`
  position: relative;
  background-color: ${colors.white};
  padding: 20px 0 12px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  z-index: 1;
`;

const Label = styled.div`
  margin-top: 4px;
  color: ${colors.black};
`;

const CenterButtonWrapper = styled.div`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: ${colors.sub};
`;

const OuterCircle = styled.div`
  width: 94px;
  height: 94px;
  background-color: rgba(255, 146, 35, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const InnerCircle = styled.div`
  width: 71px;
  height: 71px;
  background-color: ${colors.main}; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
