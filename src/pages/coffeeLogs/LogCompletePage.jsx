import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { typography } from '../../styles/typography';

const LogCompletePage = () => {

    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <Wrapper>
      <Message>기록 완료!</Message>
    </Wrapper>
  );
};

export default LogCompletePage;

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.h1`
  font-size: ${typography.title.fontSize};
  font-weight: ${typography.title.fontWeight};
  line-height: ${typography.title.lineHeight};
  color: ${colors.black};
`;
