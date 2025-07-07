import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import SubButton from '../../../components/SubButton';
import calendarCheckImg from '../../../assets/popupGraphic/HomePopupGraphic.png';
import { useNavigate } from 'react-router-dom';

const AttendancePopup = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <PopupContainer>
        <SubTitle>출석도장</SubTitle>
        <Title>
          오늘 마신 커피를 기록해<br />
          출석 도장을 찍어 주세요!
        </Title>
        <img src={calendarCheckImg} alt="출석 도장" style={{ width: 134, height: 134, margin: '0 auto 24px', display: 'block' }} />
        <Description>
          출석 도장을 모두 찍으면<br />
          커피 한 잔을 보내드려요!
        </Description>
        <SubButton onClick={() => navigate('/coffeeLogs/index')}>기록하고 출석하기</SubButton>
        <LaterButton onClick={onClose}>나중에 하기</LaterButton>
      </PopupContainer>
    </Wrapper>
  );
};

export default AttendancePopup;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(11, 7, 0, 0.5); // 어두운 배경
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContainer = styled.div`
  background-color: ${colors.white};
  width: 320px;
  padding: 32px 24px;
  border-radius: 14px;
  text-align: center;
  align-items: center;
`;

const SubTitle = styled.div`
  color: ${colors.black};
  ${typography.caption}
  margin-bottom: 8px;
`;

const Title = styled.div`
  color: ${colors.black};
  ${typography.sub_title}
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 32px;
  line-height: 120%;
`;

const Description = styled.div`
  color: ${colors.black};
  ${typography.caption}
  margin-bottom: 32px;
  line-height: 150%;
`;

const LaterButton = styled.button.attrs({ type: 'button' })`
  margin-top: 16px;
  color: ${colors.black_sub};
  background: none;
  border: none;
  cursor: pointer;
  ${typography.caption}
`;

