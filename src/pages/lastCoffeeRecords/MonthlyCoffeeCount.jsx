import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import colors from '../../styles/colors';
import { typography } from '../../styles/typography';
import axios from 'axios';
import frame369 from '../../assets/Frame 369.png';

const getMonthList = (currentMonth) => {
  // 1월부터 currentMonth-1월까지 배열 생성
  return Array.from({ length: currentMonth - 1 }, (_, i) => `${i + 1}월`);
};

const MonthCoffeeCount = ({ month = '7월' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCoffeeCount = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axios.get('/api/coffee/monthly-total', {
          params: { month },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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
              <Icon icon="tabler:chevron-down" width={24} height={24} color="#0B0700" style={{ strokeWidth: 2 }} />
            </Circle>
          </MonthButton>
        </MonthButtonWrapper>
      </MonthRow>
      <Container>
        <Title>
          {month}에 내가 마신 커피
          <CoffeeInfo>
            <Icon icon="bx:coffee-togo" width="32" height="32" color={colors.main} />
            <CountText>
              <img src={require('../../assets/icon_multiply.png')} alt="x" style={{ width: 12.37, height: 12.37 }} />
              {count}잔
            </CountText>
          </CoffeeInfo>
        </Title>
        <GraphicBox>
        <img src={frame369} alt="커피 그래픽" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
        </GraphicBox>
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
  width: 87%;
  margin: 20px auto 0 auto;
`;

const MonthLabel = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.black};
  display: flex;
  align-items: center;
  height: 24px;
  line-height: 24px;
  padding-bottom: 2px;
`;

const Title = styled.div`
  ${typography.des_bold};
  color: ${colors.black};
  text-align: center;
  margin-bottom: 8px;
`;

const CoffeeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  gap: 4px;
`;

const CountText = styled.span`
  ${typography.title};
  color: ${colors.main};
  margin-left: 6px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
`;

const GraphicBox = styled.div`
  background-color: ${colors.white};
  border-radius: 14px;
  width: 285px;
  height: 191px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${colors.black};
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
  line-height: 0;
`;
