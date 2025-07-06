import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from '../../img/images.jpg';
import { useSwipeable } from 'react-swipeable';
import PageContainer from '../../components/PageContainer';

function Logo() {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      navigate('/first');     
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
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
      width: '80%',
      maxWidth: '400px',
      height: 'auto',
    },
  };

  return (
    <div style={styles.PageContainer}>
    <div {...handlers}>
    <div style={styles.page}>
      <img src={img2} alt="중앙 이미지" style={styles.image} />
    </div>
    </div>
    </div>
  );
}

export default Logo;
