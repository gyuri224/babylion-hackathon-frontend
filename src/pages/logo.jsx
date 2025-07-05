import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from '../img/images.jpg';

function Logo() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/first'); // 2초 후 /next 경로로 이동
    }, 2000); // 2000ms = 2초

    // 컴포넌트가 언마운트될 경우 타이머 정리
    return () => clearTimeout(timer);
  }, [navigate]);

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
    <div style={styles.page}>
      <img src={img2} alt="중앙 이미지" style={styles.image} />
    </div>
  );
}

export default Logo;
