import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { typography } from '../../styles/typography';
import axios from 'axios'; 

const CoffeeCalendar = () => {
  const [attendedDays, setAttendedDays] = useState([]);
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const fullCalendar = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );

  useEffect(() => {
    const fetchAttend = async () => {
      try {
        const res = await axios.get('/api/coffee/attend/calendar', {
          params: { month: `${year}-${String(month).padStart(2, '0')}` },
        });
        setAttendedDays(res.data.attendedDays || []);
      } catch (err) {
        console.error('출석 체크 달력 API 호출 실패:', err);
      }
    };
    fetchAttend();
  }, [month, year]);

  return (
    <Wrapper>
      <MonthTitle>{month}월</MonthTitle>
      <Divider></Divider>
      <CalendarGrid>
        {days.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}

        {fullCalendar.map((date, idx) => {
          if (!date) return <div key={`empty-${idx}`} />;
          const isAttended = attendedDays.includes(date);
          return (
            <DateCircle
              key={date}
              $attended={isAttended}
            >
              <DateText>{date}</DateText>
            </DateCircle>
          );
        })}
      </CalendarGrid>
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
  width: 78%;
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
  background-color: ${({ $attended }) => ($attended ? colors.main : 'transparent')};
  border-radius: 50%;
  width: 24px;
  height: 24px;
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