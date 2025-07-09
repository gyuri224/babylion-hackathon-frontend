import React from 'react';
import img5 from '../../img/image6.jpg'
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import styled, { createGlobalStyle } from 'styled-components';
import { typography } from '../../styles/typography';
import PageContainer from '../../components/PageContainer';
import Phone from '../../components/Phone'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function LastSplash() {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/login'),
    onSwipedRight: () => navigate('/second'),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const progress = 100;

  return (
    <>

      <Phone {...handlers}>
        <ProgressBarWrapper>
          <ProgressBar style={{ width: `${progress}%` }} />
        </ProgressBarWrapper>

        <Content>
          <Text>커피를 대신 할 수 있는 <br />음료와 음식을 추천받아요</Text>
          <Image src={img5} alt="커피 이미지" />
        </Content>
      </Phone>
    </>
  );
}

export default LastSplash;

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
const Text = styled.div`
    ${typography.sub_title}; 
    margin-top: 54.5px;
    text-align: center;

`;



const Image = styled.img`
  width: 320px;
  height: 292px;
  margin-top: 70px;
`;