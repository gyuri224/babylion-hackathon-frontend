import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import frame359 from '../../../assets/reportGraphic/Frame 359.png';
import frame370 from '../../../assets/reportGraphic/Frame 370.png';
import chatgptImage from '../../../assets/reportGraphic/ChatGPT Image 2025년 7월 5일 오후 11_29_24 1.png';
import report03 from '../../../assets/reportGraphic/Report03.png';
import axios from 'axios';

const CARD_HEIGHT = 254;
const CARD_WIDTH = 172;
const GAP = 16;
const CARD_COUNT = 5;

const reportImages = {
  1: frame370,
  2: chatgptImage,
  3: frame359,
  4: report03,
};

const CoffeeReport = () => {
  const sliderRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const navigate = useNavigate();

  // nickname, topCoffee, avgCount, latteCount, compareLastMonth 상태 추가
  const [nickname, setNickname] = useState('');
  const [topCoffee, setTopCoffee] = useState('');
  const [avgCount, setAvgCount] = useState('');
  const [latteCount, setLatteCount] = useState('');
  const [isLessThanLastMonth, setIsLessThanLastMonth] = useState(null);

  useEffect(() => {
  const fetchUserAndTopCoffeeAndAverage = async () => {
    try {
      const token = localStorage.getItem('accessToken');

      // 사용자 정보 (닉네임)
      const userRes = await axios.get('/api/coffee/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNickname(userRes.data.nickname);

      // 최다 커피 메뉴
      const topCoffeeRes = await axios.get('/api/coffee/top-coffee', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTopCoffee(topCoffeeRes.data.topCoffee);

      // 한 달 평균 잔수
      const avgRes = await axios.get('/api/coffee/average', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAvgCount(avgRes.data.average || '0');

      // 카페라떼 총 누적 잔수
      const latteRes = await axios.get('/api/coffee/total-latte', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLatteCount(latteRes.data.totalLatte || '0');

      // 저번달과 커피잔 수 비교
      const compareRes = await axios.get('/api/coffee/compare-last-month', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsLessThanLastMonth(compareRes.data.lessThanLastMonth);
    } catch (err) {
      console.error('리포트 데이터 로딩 실패:', err);
      setNickname('사용자');
      setTopCoffee('아메리카노');
      setAvgCount('0');
      setLatteCount('0');
      setIsLessThanLastMonth(null);
    }
  };

  fetchUserAndTopCoffeeAndAverage();
}, []);

  const reports = [
    { id: 1, title: `${nickname ? `${nickname}님은` : ''}`, subtitle: `주로 ${topCoffee ? `'${topCoffee}'` : ''}를 마셔요` },
    { id: 2, title: '한 달 평균', subtitle: `${avgCount}잔의 커피를 마셔요` },
    { id: 3, title: '지금까지 카페라떼를', subtitle: `총 ${latteCount}잔 마셨어요` },
    { id: 4, title: '저번달보다 커피잔', subtitle: isLessThanLastMonth === null ? '' : isLessThanLastMonth ? '수가 줄었어요' : '수가 늘었어요' },
  ];

  const totalWidth = reports.length * (CARD_HEIGHT + GAP) - GAP;

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
  width: ${CARD_WIDTH / CARD_COUNT}px;
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
  display: flex;
  align-items: center;
  gap: 2px;
`;
