import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Me } from '@icon-park/react';
import colors from '../../../styles/colors';
import {typography} from '../../../styles/typography';
import PageContainer from '../../../components/PageContainer';

const TopGreetingHeader = ({ nickname = '김나리', savedAmount = 500000 }) => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate('/settings/NotificationPage');
  };
  const handleMyPageClick = () => {
    navigate('/settings/MyPage');
  };
  return (
   
    <HeaderWrapper>
      <TextBox>
        <HelloText>{nickname}님 안녕하세요!</HelloText>
      </TextBox>
      <IconBox>
        <div onClick={handleNotificationClick}>
          <IoNotificationsOutline size={28} color={colors.black} />
        </div>
        <div onClick={handleMyPageClick}>
          <Me theme="outline" size="28" strokeWidth={3} />
        </div>
      </IconBox>
    </HeaderWrapper>

  );
};

export default TopGreetingHeader;
const HeaderWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const HelloText = styled.div`
  ${typography.sub_title};
  color: ${colors.black};
`;

const IconBox = styled.div`
  display: flex;
  padding-top: 4px;
  gap: 7px;
`;
