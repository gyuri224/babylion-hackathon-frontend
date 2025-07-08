import React from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from '../../img/images.jpg';
import { useSwipeable } from 'react-swipeable';
import PageContainer from '../../components/PageContainer';
import Phone from '../../components/Phone'

function Logo() {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('✅ 왼쪽으로 스와이프 감지됨');
      navigate('/first');
    },
    onSwiping: (eventData) => {
      console.log('↔ 스와이프 중...', eventData.dir); // 방향 확인용
    },
    onTap: () => {
      console.log('🖱 탭 감지됨');
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true, // 마우스도 감지되도록 추가
  });

  const styles = {
    page: {
      backgroundColor: 'white',
      height: '100vh',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width:'111px',
      height:'38px',
      marginTop:'260px',
      marginBottom:'325px',
      marginLeft:'132px',
      marginRight:'132px'

    },
  };

  return (
    <Phone {...handlers}>
      <img src={img2} alt="중앙 이미지" style={styles.image} />
    </Phone>
  );
}

export default Logo;
