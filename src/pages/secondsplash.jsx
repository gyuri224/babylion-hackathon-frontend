import React, { useEffect } from 'react';
import img4 from '../img/image5.jpg';
import { useNavigate } from 'react-router-dom';


function SecondSplash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/last'); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  const progress = 66;

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
        <div style={styles.text}>한달마다 몇 잔의 <br/>커피를 마셨는지 확인해요</div>
        <img src={img4} alt="커피 이미지" style={styles.image} />
      </div>
    </div>
  );
}

export default SecondSplash;
