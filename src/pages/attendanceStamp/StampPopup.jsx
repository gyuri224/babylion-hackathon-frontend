import React from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import SubButton from '../../../components/SubButton';
import calendarCheckImg from '../../../assets/popupGraphic/StampPopupGraphic.png';
import { useNavigate } from 'react-router-dom';

const AttendancePopup = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <PopupContainer>
        <SubTitle>출석도장</SubTitle>
        <Title>
          축하해요! 아이스아메리카노<br />
          한 잔을 드릴게요
        </Title>
        <img src={calendarCheckImg} alt="출석 도장" style={{ width: 134, height: 134, margin: '0 auto 24px', display: 'block' }} />
        <Description>
          기프티콘 내역은 '마이페이지'에서<br />
          확인할 수 있어요
        </Description>
        <SubButton onClick={onClose}>확인</SubButton>
        <LaterButton onClick={() => navigate('/settings/MyPage')}>마이페이지 가기</LaterButton>
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
  line-height: 150%;
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

