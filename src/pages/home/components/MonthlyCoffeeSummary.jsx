import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import colors from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import PageContainer from '../../../components/PageContainer';
import axios from 'axios';                           

const MonthCoffeeCount = ({ month = '7월' }) => {
  const [count, setCount] = useState(0);             
  useEffect(() => {
    const fetchCoffeeCount = async () => {
      try {
        const response = await axios.get('/api/coffee/monthly-total');
        setCount(response.data.total);               
      } catch (error) {
        console.error('커피 소비량 불러오기 실패:', error);
      }
    };

    fetchCoffeeCount();
  }, []);

  return (
    <Container>
      <LeftSection>
        <Title>{month}에 내가 마신 커피</Title>
        <CoffeeInfo>
          <Icon icon="bx:coffee-togo" width="32" height="32" color={colors.main} />
          <CountText>x{count}잔</CountText>
        </CoffeeInfo>
      </LeftSection>
      <GraphicBox>그래픽</GraphicBox>
    </Container>
  );
};

export default MonthCoffeeCount;

const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              0 -2px 6px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 20px auto 0 auto;
`;

const LeftSection = styled.div``;

const Title = styled.div`
  ${typography.des_bold};
  color: ${colors.black};
`;

const CoffeeInfo = styled.div`
  display: flex;
  align-items: center;
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
  width: 100px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: ${colors.black};
`;
