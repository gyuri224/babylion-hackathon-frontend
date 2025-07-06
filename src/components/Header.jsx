import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { typography } from '../styles/typography';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header1 = ({ title = '기록하기' }) => {
  const navigate = useNavigate();
  return (
    <Header>
      <BackButton onClick={() => navigate(-1)} style={{ marginTop: '10px' }}>
        <Icon
          icon="tabler:chevron-left"
          width={24}
          height={24}
          color="#0B0700"
          style={{ display: 'block' }}
        />
      </BackButton>
      <Title>{title}</Title>
    </Header>
  );
};

export default Header1;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 375px;   
  margin-left: auto;
  margin-right: auto;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: ${colors.black};
  cursor: pointer;
`;

const Title = styled.h1`
  width: fit-content;                
  color: ${colors.black};
  font-size: ${typography.des.fontSize};
  font-weight: ${typography.des.fontWeight};
  line-height: ${typography.des.lineHeight};
  margin: 10px 0 0 0;                // 위쪽 마진
  position: relative;
  left: -12px;                       
  white-space: nowrap;       
  margin-left: 100px;
`;
