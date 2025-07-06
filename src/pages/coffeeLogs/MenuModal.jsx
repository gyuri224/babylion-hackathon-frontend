import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { typography } from '../../styles/typography';
import SliderContainer from '../../components/SliderContainer';
import MainButton from '../../components/MainButton';

// Helper: filter recentMenus to last 7 days, unique, max 3
function getRecentMenus(recentMenus) {
  const now = new Date();
  // recentMenus: [{ name, date }, ...] 형태를 가정
  const filtered = recentMenus.filter(m => {
    if (!m.date) return false;
    const diff = (now - new Date(m.date)) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  });
  // 중복 제거 (name 기준)
  const unique = [];
  filtered.forEach(m => {
    if (!unique.find(u => u.name === m.name)) unique.push(m);
  });
  return unique.slice(0, 3);
}

const MenuModal = ({ show, setShow, menu, onSelect, recentMenus, menuOptions }) => {
  if (!show) return null;
  // recentMenus는 [{ name, date }, ...] 형태여야 함
  const recentToShow = getRecentMenus(recentMenus);
  return (
    <SliderContainer onClick={() => setShow(false)}>
        <ModalHeader>
          <ModalTitle>메뉴</ModalTitle>
          <CloseButton onClick={() => setShow(false)}>✕</CloseButton>
        </ModalHeader>
        <Divider style={{ margin: '12px 0 8px 0' }} />
        {recentToShow.length > 0 && (
          <>
            <RecentLabel>최근 선택</RecentLabel>
            <RecentRow>
              {recentToShow.map((m) => (
                <MenuButton key={m.name} selected={menu === m.name} onClick={() => onSelect(m.name)}>{m.name}</MenuButton>
              ))}
            </RecentRow>
            <Divider style={{ margin: '12px 0 8px 0' }} />
          </>
        )}
        <MenuGrid>
          {menuOptions.map((item) => (
            <MenuButton
              key={item}
              type="button"
              selected={menu === item}
              onClick={() => onSelect(item)}
              style={
                (item === "안마심" || item === "기타")
                  ? { marginTop: "12px" }
                  : undefined
              }
            >
              {item}
            </MenuButton>
          ))}
        </MenuGrid>
        <MainButton style={{ margin: '28px auto 24px auto', display: 'block' }} onClick={() => setShow(false)}>
          완료
        </MainButton>
    </SliderContainer>
  );
};

export default MenuModal;

const ModalContainer = styled.div`
  width: 100vw;
  max-width: 400px;
  min-width: 320px;
  height: 80vh;
  margin: 0 auto;
  background-color: ${colors.white};
  box-shadow: 0 -4px 24px rgba(0,0,0,0.12);
  border-radius: 24px 24px 0 0;
  padding: 20px 0 0 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 0;
  margin: 0 0 8px 0;
`;

const ModalTitle = styled.h2`
  ${typography.sub_title};
  text-align: center;
  flex: 1;
  margin: 0;
`;

const CloseButton = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
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
  margin-top: 10px;
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