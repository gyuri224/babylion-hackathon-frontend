import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import colors from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import PageContainer from '../../../components/PageContainer';
import axios from 'axios';                           
import frame354 from '../../../assets/Frame 354.png';

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
    <Container>
      <LeftSection>
        <Title>{month}에 내가 마신 커피</Title>
        <CoffeeInfo>
          <Icon icon="bx:coffee-togo" width="32" height="32" color={colors.main} />
          <CountText>
            <img src={require('../../../assets/icon_multiply.png')} alt="x" style={{ width: 12.37, height: 12.37 }} />
            {count}잔
          </CountText>
        </CoffeeInfo>
      </LeftSection>
      <GraphicBox>
        <img src={frame354} alt="커피 그래픽" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
      </GraphicBox>
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
  width: 87%;
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
  width: 120px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
