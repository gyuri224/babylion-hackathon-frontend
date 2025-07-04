import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import axios from 'axios'; 

const coffeeColors = {
  4: '#FF6200',
  3: '#FF9223',
  2: '#FFBB76',
  1: '#FFEDDB',
  0: 'transparent',
};

const CoffeeCalendar = () => {
  const [showAll, setShowAll] = useState(false);
  const [coffeeData, setCoffeeData] = useState({});
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const isToday = (date) => today.getDate() === date;

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const fullCalendar = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );
  const displayedDays = showAll ? fullCalendar : fullCalendar.slice(-7);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
        const endDate = `${year}-${String(month).padStart(2, '0')}-${String(daysInMonth).padStart(2, '0')}`;
        const res = await axios.get('/api/coffee/heatmap', {
          params: {
            startDate,
            endDate,
          },
        });
        const apiData = res.data;
        const mapped = {};
        Object.entries(apiData).forEach(([dateStr, count]) => {
          const dateObj = new Date(dateStr);
          if (dateObj.getMonth() + 1 === month) {
            mapped[dateObj.getDate()] = count;
          }
        });
        setCoffeeData(mapped);
      } catch (err) {
        console.error('커피 소비량 API 호출 실패:', err);
      }
    };

    fetchData();
  }, [month, year]);

  return (
    <Wrapper>
      <MonthTitle>{month}월</MonthTitle>
      <Divider></Divider>
      <CalendarGrid>
        {days.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}

        {displayedDays.map((date, idx) => {
          if (!date) return <div key={`empty-${idx}`} />;
          const count = coffeeData[date] ?? 0;
          const isTodayDate = isToday(date);

          return (
            <DateCircle
              key={date}
              $bg={coffeeColors[count]}
              $isToday={isTodayDate}
            >
              <DateText>{date}</DateText>
            </DateCircle>
          );
        })}
      </CalendarGrid>

      <ToggleButton onClick={() => setShowAll(!showAll)}>
        {showAll ? '요약 보기' : '모두 보기'}
      </ToggleButton>
    </Wrapper>
  );
};

export default CoffeeCalendar;

const Wrapper = styled.div`
  background-color: ${colors.white};
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1),
              0 -2px 6px rgba(0, 0, 0, 0.05);
  padding: 20px;
  width: 90%;
  margin: 20px auto 0;
  text-align: center;
`;

const MonthTitle = styled.div`
  ${typography.sub_title};
  color: ${colors.black};
  margin-bottom: 12px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1.5px solid;
  color: ${colors.sub};
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 16px;
`;

const WeekDay = styled.div`
  ${typography.caption};
  color: ${colors.black_sub};
`;

const DateCircle = styled.div`
  background-color: ${({ $bg }) => $bg};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

const DateText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black};
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: 2px solid ${colors.main};
  border-radius: 4px;
  padding: 3px 130px;
  color: ${colors.main};
  font-weight: 600;
  cursor: pointer;
  ${typography.des};
`;