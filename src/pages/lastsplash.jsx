import React from 'react';
import img5 from '../img/image6.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LastSplash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login'); // 2초 후 /next 경로로 이동
    }, 2000); // 2000ms = 2초

    // 컴포넌트가 언마운트될 경우 타이머 정리
    return () => clearTimeout(timer);
  }, [navigate]);    
  const progress = 100;

  const styles = {
    progressBarWrapper: {
      width: '100%',
      height: '6px',
      backgroundColor: '#e0e0e0',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    progressBar: {
      width: `${progress}%`,
      height: '100%',
      backgroundColor: '#ff6200',
      transition: 'width 0.3s ease',
    },
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column', // 세로 정렬
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    image: {
      width: '200px',
      height: 'auto',
      marginTop: '50px',
    },
    text: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
    }
  };

  return (
    <div>
      {/* 상단 진행 바 */}
      <div style={styles.progressBarWrapper}>
        <div style={styles.progressBar}></div>
      </div>

      {/* 이미지 + 텍스트 */}
      <div style={styles.container}>
        <div style={styles.text}>커피를 대신할 수 있는<br/>음료와 음식을 추천받아요</div>
        <img src={img5} alt="커피 이미지" style={styles.image} />
      </div>
    </div>
  );
}

export default LastSplash;
