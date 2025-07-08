import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { typography } from '../../styles/typography';

export default function CongraturationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <style>
        {`
          @keyframes fadeScale {
            0% {
              opacity: 0;
              transform: scale(0.5) translateY(20px);
            }
            30% {
              opacity: 1;
              transform: scale(1.2) translateY(-10px);
            }
            60% {
              opacity: 1;
              transform: scale(1) translateY(-20px);
            }
            100% {
              opacity: 0;
              transform: scale(1) translateY(-50px);
            }
          }
        `}
      </style>
      <Container>
        <StyledTitle>환영해요!</StyledTitle>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const StyledTitle = styled.div`
  ${typography.title};
  animation: fadeScale 2s ease-in-out;
  color: #000000;
`;
