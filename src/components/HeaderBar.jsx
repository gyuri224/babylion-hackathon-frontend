import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { typography } from '../styles/typography';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const HeaderBar = ({ title = '기록하기' }) => {
  const navigate = useNavigate();
  return (
    <Header>
      <BackButton onClick={() => navigate(-1)}>
        <Icon icon="tabler:chevron-left" width={24} height={24} color="#0B0700" style={{ display: 'block' }} />
      </BackButton>
      <Title>{title}</Title>
    </Header>
  );
};

export default HeaderBar;

const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: ${colors.black};
`;

const Title = styled.h1`
  color: ${colors.black};
  ${typography.des};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  width: max-content;
  pointer-events: none;
`; 