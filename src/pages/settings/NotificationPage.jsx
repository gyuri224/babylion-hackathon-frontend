import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
import PageContainer from '../../components/PageContainer';

const notifications = [
  {
    id: 1,
    title: '정O인님이 500,000원 적립에 성공했어요!',
    time: '7시간 전',
    highlight: true,
  },
  {
    id: 2,
    title: '카페 라떼 효과 발동!',
    description: '목표 달성까지 12.6% 남았어요. 이번 달에 목표 달성이 예상돼요.',
    time: '7시간 전',
  },
  {
    id: 3,
    title: '커피는 하루에 한 잔!',
    description: '지금까지 총 13잔의 커피를 소비했어요.',
    time: '18시간 전',
  },
];

const NotificationPage = () => {
  return (
    <PageContainer>
      <Wrapper>
        <Title>알림</Title>
        <List>
          {notifications.map((item) => (
            <NotificationCard key={item.id} $highlight={item.highlight}>
              <LeftDot />
              <Content>
                <MainText>{item.title}</MainText>
                {item.description && <SubText>{item.description}</SubText>}
                <Time>{item.time}</Time>
              </Content>
            </NotificationCard>
          ))}
        </List>
      </Wrapper>
    </PageContainer>
  );
};

export default NotificationPage;

const Wrapper = styled.div`
  padding: 24px 20px;
  background-color: ${colors.white};
  min-height: 100vh;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${colors.black};
  text-align: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NotificationCard = styled.div`
  display: flex;
  background-color: ${({ $highlight }) => ($highlight ? '#FFEEDB' : '#F8F8F8')};
  border-radius: 12px;
  padding: 12px;
`;

const LeftDot = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.sub};
  margin-right: 12px;
  flex-shrink: 0;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

const MainText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black};
`;

const SubText = styled.div`
  font-size: 12px;
  color: ${colors.black_sub};
`;

const Time = styled.div`
  font-size: 10px;
  color: ${colors.black_sub};
  align-self: flex-end;
`;

