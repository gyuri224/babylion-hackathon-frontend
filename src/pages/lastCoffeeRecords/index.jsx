import React, { useState } from 'react';
import CoffeeCalendar from '../home/components/CoffeeCalendar';
import LastCoffeeReport from './LastCoffeeReport';
import LastMonthlyCoffeeCount from './MonthlyCoffeeCount';
import HeaderBar from '../../components/HeaderBar';
import PageContainer from '../../components/PageContainer';
import WheelPicker from '../../components/WheelPicker';

const getYears = () => {
  const now = new Date();
  const thisYear = now.getFullYear();
  return [thisYear - 1, thisYear].map(String); // 최근 2년만 예시
};
const getMonths = () => Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));

const LastCoffeeRecords = () => {
  const now = new Date();
  const [showWheel, setShowWheel] = useState(true);
  const [selected, setSelected] = useState({
    year: String(now.getFullYear()),
    month: String(now.getMonth() + 1).padStart(2, '0'),
  });

  const handleWheelChange = (type, value) => {
    setSelected((prev) => ({ ...prev, [type]: value }));
  };

  const handleWheelComplete = () => {
    setShowWheel(false);
  };

  const selectedMonth = `${selected.year}-${selected.month}`;

  return (
    <PageContainer>
      <HeaderBar title="지난 기록" />
      <LastMonthlyCoffeeCount month={`${parseInt(selected.month, 10)}월`} />
      <CoffeeCalendar month={selectedMonth} />
      <LastCoffeeReport month={selectedMonth} />
      <WheelPicker
        show={showWheel}
        setShow={setShowWheel}
        value={selected}
        onChange={handleWheelChange}
        years={getYears()}
        months={getMonths()}
        days={[]}
        type="month"
      />
    </PageContainer>
  );
};

export default LastCoffeeRecords;