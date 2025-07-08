import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { typography } from '../../styles/typography';
import SliderContainer from '../../components/SliderContainer';
import MainButton from '../../components/MainButton';
import axios from 'axios';

function getRecentMenus(recentMenus) {
  const now = new Date();
  // recentMenus: [{ name, date }, ...] 형태를 가정
  const filtered = recentMenus.filter(m => {
    if (!m.date) return false;
    const diff = (now - new Date(m.date)) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  });
  // 중복 제거
  const unique = [];
  filtered.forEach(m => {
    if (!unique.find(u => u.name === m.name)) unique.push(m);
  });
  return unique.slice(0, 3);
}

const MenuModal = ({ show, setShow, menu, onSelect, menuOptions }) => {
  const [recentMenus, setRecentMenus] = useState([]);

  useEffect(() => {
    if (!show) return;
    axios.get('/api/coffee/recent-coffee')
      .then(res => {
        // 응답이 배열이 아닐 수도 있으니 배열로 변환
        const data = Array.isArray(res.data) ? res.data : [res.data];
        setRecentMenus(data);
      })
      .catch(() => setRecentMenus([]));
  }, [show]);

  const recentToShow = getRecentMenus(recentMenus);
  const etcMenus = menuOptions.filter(item => item === "안마심" || item === "기타");
  const normalMenus = menuOptions.filter(item => item !== "안마심" && item !== "기타");
  if (!show) return null;
  return (
    <SliderContainer onClick={() => setShow(false)}>
        <ModalHeader>
          <ModalTitle>메뉴</ModalTitle>
          <CloseButton onClick={() => setShow(false)}>✕</CloseButton>
        </ModalHeader>
        <Divider style={{ margin: '12px 0 8px 0' }} />
        <RecentLabel>최근 선택</RecentLabel>
        <RecentRow>
          {recentToShow.map((m) => (
            <MenuButton key={m.name} selected={menu === m.name} onClick={() => onSelect(m.name)}>{m.name}</MenuButton>
          ))}
        </RecentRow>
        <Divider style={{ margin: '12px 0 8px 0' }} />
        <MenuGrid>
          {normalMenus.map((item) => (
            <MenuButton
              key={item}
              type="button"
              selected={menu === item}
              onClick={() => onSelect(item)}
            >
              {item}
            </MenuButton>
          ))}
        </MenuGrid>
        {etcMenus.length > 0 && (
          <EtcRow>
            {etcMenus.map((item) => (
              <MenuButton
                key={item}
                type="button"
                selected={menu === item}
                onClick={() => onSelect(item)}
              >
                {item}
              </MenuButton>
            ))}
          </EtcRow>
        )}

        <BottomButtonWrapper>
          <MainButton onClick={() => setShow(false)}>완료</MainButton>
        </BottomButtonWrapper>

    </SliderContainer>
  );
};

export default MenuModal;



const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 12px 0 12px 0;
  height: 48px;
`;

const ModalTitle = styled.h2`
  ${typography.sub_title};
  text-align: center;
  flex: none;
  margin: 0 auto;
  position: absolute;
  left: 0; right: 0;
  width: 100%;
  pointer-events: none;
`;

const CloseButton = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const Divider = styled.hr`
  border: none;
  border-top: 1.5px solid ${colors.main_50};
  margin: 12px 0 8px 0;
`;

const RecentLabel = styled.p`
  margin: 0 0 8px 0;
  ${typography.caption};
  color: ${colors.black_sub};
  padding-left: 20px;
`;

const RecentRow = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 0 20px 8px 20px;
  margin-bottom: 0;
`;

const MenuGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 8px;
  padding: 0 20px;
  margin-top: 26px;
  justify-content: flex-start;
`;

const MenuButton = styled.button`
  height: 29px;
  border-radius: 100px;
  border: 1.5px solid ${(props) => (props.selected ? colors.white : colors.black_sub)};
  background-color: ${(props) => (props.selected ? colors.main : colors.white)};
  color: ${(props) => (props.selected ? colors.white : colors.black)};
  ${typography.des};
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border 0.15s;
  text-align: center;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08), 0 0 2px 0 rgba(0,0,0,0.10);
  padding: 0 18px;
  width: auto;
  min-width: 0;
  margin: 0;
`;

const BottomButtonWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EtcRow = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 20px;
  margin-top: 28px; 
`; 