import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import frame359 from '../../../assets/reportGraphic/Frame 359.png';
import frame370 from '../../../assets/reportGraphic/Frame 370.png';
import chatgptImage from '../../../assets/reportGraphic/ChatGPT Image 2025년 7월 5일 오후 11_29_24 1.png';

const reports = [
  { id: 1, title: '한 달 평균', subtitle: '32잔의 커피를 마셨어요' },
  { id: 2, title: '주말보다 평일에', subtitle: '커피를 더 1잔 마셔요' },
  { id: 3, title: '아침 9시에', subtitle: '가장 많이 마셨어요' },
  { id: 4, title: '화요일에', subtitle: '커피 비중이 가장 높아요' },
  { id: 5, title: '이번 달 목표', subtitle: '40잔 채워보기!' },
];

const CARD_HEIGHT = 254;
const CARD_WIDTH = 172;
const GAP = 16;

const reportImages = {
  1: frame359,
  2: frame370,
  3: chatgptImage,
};

const CoffeeReport = () => {
  const sliderRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const totalWidth = reports.length * (CARD_HEIGHT + GAP) - GAP;
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrollX(sliderRef.current.scrollLeft);
  };

  const handlePastClick = () => {
    navigate('/lastCoffeeRecords');
  };

  return (
    <Container>
      <TitleRow>
        <Title>리포트</Title>
        <PastButton onClick={handlePastClick}>
          지난기록
          <Icon icon="tabler:chevron-right" width={24} height={24} style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 2 }} />
        </PastButton>
      </TitleRow>
    <Wrapper>
      <Slider ref={sliderRef} onScroll={handleScroll}>
        {reports.map((report) => (
          <Card key={report.id}>
            <TextBox>
              <Subtitle>{report.title}</Subtitle>
              <Subtitle>{report.subtitle}</Subtitle>
            </TextBox>
            <GraphicBox>
              {reportImages[report.id] && (
                <img src={reportImages[report.id]} alt="그래픽" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              )}
            </GraphicBox>
          </Card>
        ))}
      </Slider>

      <IndicatorTrack>
        <IndicatorBar
          style={{
            transform: `translateX(${(scrollX / totalWidth) * CARD_HEIGHT}px)`,
          }}
        />
      </IndicatorTrack>
    </Wrapper>
    </Container>
  );
};

export default CoffeeReport;

const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              0 -2px 6px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: left;
  width: 87%;
  margin: 20px auto 0 auto;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  display: flex;
  gap: ${GAP}px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  padding: 10px 0;

  /* 스크롤바 숨기기 (크롬, 엣지, 사파리) */
  &::-webkit-scrollbar {
    display: none;
  }
  /* 파이어폭스 */
  scrollbar-width: none;
  /* IE, Edge */
  -ms-overflow-style: none;
`;

const Card = styled.div`
  width: 172px;
  height: 254px;
  scroll-snap-align: center;
  background-color: ${colors.sub};
  border-radius: 20px;
  padding: 20px;
  flex-shrink: 0;
  color: ${colors.main};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px; 
`;

const Title = styled.div`
  ${typography.des_bold};
  color: ${colors.black};
`;

const Subtitle = styled.div`
  ${typography.des_bold};
  color: ${colors.main};
`;

const GraphicBox = styled.div`
  background-color: ${colors.sub};
  color: ${colors.black};
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const IndicatorTrack = styled.div`
  width: ${CARD_WIDTH}px;
  height: 6px;
  background-color: #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
  margin: 0 auto;
`;

const IndicatorBar = styled.div`
  width: ${CARD_WIDTH / reports.length}px;
  height: 100%;
  background-color: ${colors.main};
  transition: transform 0.2s ease-out;
  border-radius: 3px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PastButton = styled.button`
  background: none;
  border: none;
  color: ${colors.black_sub};
  ${typography.caption};
  cursor: pointer;
`;
