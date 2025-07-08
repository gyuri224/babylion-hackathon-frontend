
import React from 'react';
import Phone from '../../components/Phone';
import HeaderBars from '../../components/HeaderBarj';
import blue from '../../img/berry.jpg';
import lemon from '../../img/lemonwater.jpg';
import styled from 'styled-components';

function PageWithTwoWindows() {
  return (
    <Phone>
      <HeaderBars title="커피 말고" />
      <ContentWrapper>
        <Box>
          <SectionTitle>이번주 추천 음료</SectionTitle>
          <Image src={lemon} alt="레몬" />
          <TextArea>
            <Title>레몬수</Title>
            <Description>더운 여름엔 수분 섭취가 중요해요</Description>
            <SmallBox>
만드는 법:<br/>레몬 반 개(레몬즙)를 물 500ml와 섞어 마셔요
            </SmallBox>
          </TextArea>
        </Box>

        <Box>
          <SectionTitle style={{marginBottom:'15px'}}>이번주 추천 음식</SectionTitle>
          <Image src={blue} alt="블루베리" />
          <TextArea>
            <Title>블루베리</Title>
            <Description>상큼 달콤한 핑거 푸드</Description>
            <SmallBox>
              작은 크기에도 불구하고 비타민과 항산화 성분이 풍부해 꾸준히 먹으면 건강에 좋아요
            </SmallBox>
          </TextArea>
        </Box>
      </ContentWrapper>
    </Phone>
  );
}

export default PageWithTwoWindows;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // ✅ 가로 가운데 정렬
  padding: 20px;
  gap: 24px;
`;

const Box = styled.div`
  width: 327px;
  height: 415px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 281px;
  height: 192px;
  object-fit: cover;
  border-radius: 12px;
  align-self: center;
`;

const SectionTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-top: 13px;
  margin-bottom: 0px;
  line-height: 150%;
  font-family: 'Pretendard', sans-serif;
`;

const TextArea = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #FF9223;
  text-align: left;
  line-height: 120%;
  font-family: 'Pretendard', sans-serif;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;
  text-align: left;
  margin-top: 4px;
  line-height: 150%;
  font-family: 'Pretendard', sans-serif;
`;

const SmallBox = styled.div`
  background-color: #f0f0f0;
  padding: 8px 12px;
  border-radius: 8px;
  margin-top: 10px;
  font-size: 13px;
  color: #333;
  line-height: 1.4;
  text-align: left;
  width: 279px;
  height: 48px;
  font-family: 'Pretendard', sans-serif;
`;
