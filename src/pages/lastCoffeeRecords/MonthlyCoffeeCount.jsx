import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import colors from '../../styles/colors';
import { typography } from '../../styles/typography';
import axios from 'axios';

const getMonthList = (currentMonth) => {
  // 1월부터 currentMonth-1월까지 배열 생성
  return Array.from({ length: currentMonth - 1 }, (_, i) => `${i + 1}월`);
};

const MonthCoffeeCount = ({ month = '7월' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCoffeeCount = async () => {
      try {
        const response = await axios.get('/api/coffee/monthly-total', { params: { month } });
        setCount(response.data.total);
      } catch (error) {
        console.error('커피 소비량 불러오기 실패:', error);
      }
    };
    fetchCoffeeCount();
  }, [month]);

  return (
    <>
      <MonthRow>
        <MonthLabel>{month}</MonthLabel>
        <MonthButtonWrapper>
          <MonthButton>
            <Circle>
              <Icon icon="tabler:chevron-down" width={24} height={18} color="#0B0700" style={{ strokeWidth: 2, display: 'block' }} />
            </Circle>
          </MonthButton>
        </MonthButtonWrapper>
      </MonthRow>
      <Container>
        <Title>
          {month}에 내가 마신 커피
          <CoffeeInfo>
            <Icon icon="bx:coffee-togo" width="32" height="32" color={colors.main} />
            <CountText>x{count}잔</CountText>
          </CoffeeInfo>
        </Title>
        <GraphicBox>그래픽</GraphicBox>
      </Container>
    </>
  );
};

export default MonthCoffeeCount;

const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1),
              0 -2px 6px rgba(0, 0, 0, 0.05);
  padding: 32px 20px 24px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 20px auto 0 auto;
`;

const MonthLabel = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.black};
  margin-bottom: 12px;
`;

const Title = styled.div`
  ${typography.des_bold};
  color: ${colors.black};
  text-align: center;
  margin-bottom: 12px;
`;

const CoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const CountText = styled.span`
  ${typography.title};
  color: ${colors.main};
  margin-left: 6px;
`;

const GraphicBox = styled.div`
  background-color: ${colors.sub};
  border-radius: 14px;
  width: 90%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${colors.black};
  margin-top: 24px;
`;

const MonthRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
`;

const MonthButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MonthButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${colors.sub};
  display: flex;
  align-items: center;
  justify-content: center;
`;
