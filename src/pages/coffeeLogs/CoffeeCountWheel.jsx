import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import SliderContainer from './SliderContainer';
import { typography } from '../styles/typography';

const WheelPicker = ({ value, onChange, show, setShow, years, months, days }) => {
  if (!show) return null;

  // Helper to render a wheel column
  const renderWheel = (options, selected, onSelect) => (
    <WheelList>
      {options.map((opt, idx) => (
        <WheelItem
          key={opt}
          selected={opt === selected}
          onClick={() => onSelect(opt)}
        >
          {opt}
        </WheelItem>
      ))}
    </WheelList>
  );

  return (
    <SliderContainer onClick={() => setShow(false)}>
      <WheelSheet onClick={e => e.stopPropagation()}>
        <CompleteButton onClick={() => setShow(false)}>완료</CompleteButton>
        <WheelsRow>
          {renderWheel(years, value.year, v => onChange('year', v))}
          {renderWheel(months, value.month, v => onChange('month', v))}
          {renderWheel(days, value.day, v => onChange('day', v))}
        </WheelsRow>
        <LabelsRow>
          <WheelLabel>년</WheelLabel>
          <WheelLabel>월</WheelLabel>
          <WheelLabel>일</WheelLabel>
        </LabelsRow>
      </WheelSheet>
    </SliderContainer>
  );
};

export default WheelPicker;

const WheelSheet = styled.div`
  background: ${colors.white};
  border-radius: 24px;
  padding: 0px 0 0px 0;
  margin: 53px 0 54px 0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WheelsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 120px;
`;

const WheelList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 60px;
  height: 120px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const WheelItem = styled.li`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 18px;
  color: ${({ selected }) => (selected ? '#FF9223' : '#AEAEAE')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  background: ${({ selected }) => (selected ? 'rgba(255,146,35,0.08)' : 'transparent')};
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.15s, background 0.15s;
`;

const LabelsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 8px;
`;

const WheelLabel = styled.div`
  font-size: 14px;
  color: ${colors.white};
  text-align: center;
  ${typography.caption};
`;

const CompleteButton = styled.button`
  background-color: ${colors.white};
  padding: 12px;
  border: none;
  border-radius: 10px;
  width: 90%;
  margin: 12px auto;
  display: block;
  font-size: 16px;
  color: ${colors.main};
  cursor: pointer;
`; 