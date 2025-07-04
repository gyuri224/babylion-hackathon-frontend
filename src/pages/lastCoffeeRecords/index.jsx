import React from 'react';
import CoffeeCalendar from '../home/components/CoffeeCalendar';
import LastCoffeeReport from './LastCoffeeReport';
import LastMonthlyCoffeeCount from './MonthlyCoffeeCount';
import HeaderBar from '../../components/HeaderBar';
import PageContainer from '../../components/PageContainer';

const LastCoffeeRecords = () => (
  <PageContainer>
    <HeaderBar title="지난 기록" />
    <LastMonthlyCoffeeCount />
    <CoffeeCalendar />
    <LastCoffeeReport />
  </PageContainer>
);

export default LastCoffeeRecords;