import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import HeaderBar from '../../components/HeaderBar';
import StampCalendar from './StampCalendar';
import MainButton from '../../components/MainButton';
import { typography } from '../../styles/typography';
import colors from '../../styles/colors';
import PageContainer from '../../components/PageContainer';
import axios from 'axios';
import StampPopup from './StampPopup';

const AttendanceStampPage = () => {
  const [isFullAttend, setIsFullAttend] = useState(false);
  const [rewardAvailable, setRewardAvailable] = useState(false); // eslint-disable-line no-unused-vars


  const [loading, setLoading] = useState(false);
  const [showStampPopup, setShowStampPopup] = useState(false);
  const [attendedDays, setAttendedDays] = useState([]);
  const [daysInMonth, setDaysInMonth] = useState(0);

  useEffect(() => {
    const fetchAttend = async () => {
      try {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const res = await axios.get('https://coffeeloging.duckdns.org/api/coffee/attend/calendar', {
          params: { month: `${year}-${String(month).padStart(2, '0')}` },
        });
        setIsFullAttend(res.data.isFullAttend);
        setAttendedDays(res.data.attendedDays || []);
        setDaysInMonth(new Date(year, month, 0).getDate());
      } catch (err) {
        setIsFullAttend(false);
        setAttendedDays([]);
        setDaysInMonth(0);
      }
    };
    fetchAttend();
  }, []);

  const remainCount = daysInMonth - attendedDays.length;

  const handleFullAttend = async () => {
    if (!isFullAttend || loading) return;
    setLoading(true);
    try {
      const res = await axios.get('https://coffeeloging.duckdns.org/api/coffee/attend/full-attend-check');
      setRewardAvailable(res.data.rewardAvailable);
      if (res.data.rewardAvailable) {
        setShowStampPopup(true);
      } else {
        alert(res.data.message || '보상을 받을 수 없습니다.');
      }
    } catch (err) {
      alert('보상 확인에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseStampPopup = () => setShowStampPopup(false);

  return (
    <PageContainer>
      <HeaderBar title="출석도장" />
      <InfoText>
        아이스 아메리카노 한 잔까지<br />
        <Highlight>{remainCount}개</Highlight> 남았어요
      </InfoText>
      <CalendarWrapper>
        <StampCalendar />
      </CalendarWrapper>
      <SubButtonWrapper>
        <CompleteButton disabled={!isFullAttend}>
          한 달 출석 도장 완료
          <FullAttendButton
            $active={isFullAttend}
            onClick={handleFullAttend}
            style={{ cursor: isFullAttend ? 'pointer' : 'not-allowed' }}
          >
            받기
          </FullAttendButton>
        </CompleteButton>
      </SubButtonWrapper>
      <ButtonWrapper>
        <MainButton>기록하고 출석하기</MainButton>
      </ButtonWrapper>
      {showStampPopup && (
        <PopupOverlay>
          <StampPopup onClose={handleCloseStampPopup} />
        </PopupOverlay>
      )}
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

const SubButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: left;
  margin-top: 24px;
`;

const Title = styled.h1`
  color: ${colors.black};
  ${typography.des};
`;

const CompleteButton = styled(MainButton)`
  background: ${colors.white};
  color: ${colors.black};
  ${typography.des};
  text-align: left;
  margin-bottom: 12px;
  cursor: not-allowed;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1),
              0 -2px 6px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 12px;      
`;

const FullAttendButton = styled.div`
  display: flex;
  padding: 4px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid var(--black_sub, #AEAEAE);
  background: var(--w, #FCFCFC);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  color: ${colors.black};
  transition: all 0.2s;
  ${({ $active }) =>
    $active &&
    css`
      border: 1.5px solid ${colors.sub};
      background: ${colors.main};
      color: ${colors.white};
    `}
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(11, 7, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

