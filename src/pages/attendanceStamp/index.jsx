import React from 'react';
import styled from 'styled-components';
import HeaderBar from '../../components/HeaderBar';
import CoffeeCalendar from '../home/components/CoffeeCalendar';
import MainButton from '../../components/MainButton';
import { typography } from '../../styles/typography';
import colors from '../../styles/colors';
import PageContainer from '../../components/PageContainer';

const AttendanceStampPage = () => {
  return (
    <PageContainer>
      <HeaderBar title="출석도장" />
      <InfoText>
        아이스 아메리카노 한 잔까지<br />
        <Highlight>5개</Highlight> 남았어요
      </InfoText>
      <CalendarWrapper>
        <CoffeeCalendar />
      </CalendarWrapper>
      <ButtonWrapper>
        <MainButton>기록하고 출석하기</MainButton>
      </ButtonWrapper>
    </PageContainer>
  );
};

export default AttendanceStampPage;

const InfoText = styled.div`
  margin: 24px 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #222;
  text-align: center;
`;

const Highlight = styled.span`
  color: #FF9223;
`;

const CalendarWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Title = styled.h1`
  color: ${colors.black};
  ${typography.des};
`;
