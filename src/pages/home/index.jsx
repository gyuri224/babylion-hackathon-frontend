import React, { useEffect, useState } from 'react';
import colors from '../../styles/colors';
import typography from '../../styles/typography';
import styled from 'styled-components';
import PageContainer from '../../components/PageContainer';

import TopGreetingHeader from './components/TopGreetingHeader';
import MonthlyCoffeeSummary from './components/MonthlyCoffeeSummary';
import CoffeeCalendar from './components/CoffeeCalendar';
import HomeNavBar from '../../components/HomeNavBar';
import CoffeeReport from './components/CoffeeReport'

// 임시 사용자 데이터 (백엔드 연동 전 테스트용)
const mockUser = {
  nickname: '김나리'
};

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 실제로는 API 요청을 통해 유저 정보 불러옴
    setUser(mockUser);
  }, []);

  if (!user) return <div>로딩 중...</div>;

  return (
    <PageContainer>
      <TopGreetingHeader nickname={user.nickname} savedAmount={user.totalSaved} />
      <MonthlyCoffeeSummary cupCount={12} />
      <CoffeeCalendar/>
      <CoffeeReport/>
      <HomeNavBar />
    </PageContainer>
  );
};

export default HomePage;


