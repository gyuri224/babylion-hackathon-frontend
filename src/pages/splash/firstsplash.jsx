import React from 'react';
import img3 from '../../img/image4.jpg';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import styled, { createGlobalStyle } from 'styled-components';
import { typography } from '../../styles/typography';
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function FirstSplash() {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/second'),
    onSwipedRight: () => navigate('/'),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const progress = 33;

  return (
    <>
      <GlobalStyle />
      <PageContainer {...handlers}>
        <ProgressBarWrapper>
          <ProgressBar style={{ width: `${progress}%` }} />
        </ProgressBarWrapper>

        <Content>
          <Text>하루마다 <br />커피의 소비량을 기록해요</Text>
          
          <Image src={img3} alt="커피 이미지" />
        </Content>
      </PageContainer>
    </>
  );
}

export default FirstSplash;


const PageContainer = styled.div`
  width: 100%;
  max-width: 375px;
  padding: 0 24px;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  height: 100vh;
  background: #fff;
`;

const ProgressBarWrapper = styled.div`
  width: 90%;
  height: 6px;
  background-color: #FF92234D;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  border-radius: '25px';
  margin-top: 10.5px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #ff6200;
  transition: width 0.3s ease;
  border-radius: 20px;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const TextWrapper = styled.div`
  margin-top: 80px; /* ✅ 글만 위로 올릴 수 있음 (조절 가능) */
`;

const Text = styled.div`
    ${typography.sub_title}; 
  margin-top: 74.5px;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin-top: 100px;
`;