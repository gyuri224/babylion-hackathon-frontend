import { Timer } from '@icon-park/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const style = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    color: 'black',
    fontSize: '4rem',
    fontWeight: 'bold',
    animation: 'fadeScale 3s ease forwards',
  },
};

export default function CongraturationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, 2000); // 2000ms = 2초

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <>
      <style>
        {`
          @keyframes fadeScale {
            0% {
              opacity: 0;
              transform: scale(0.5) translateY(20px);
            }
            30% {
              opacity: 1;
              transform: scale(1.2) translateY(-10px);
            }
            60% {
              opacity: 1;
              transform: scale(1) translateY(-20px);
            }
            100% {
              opacity: 0;
              transform: scale(1) translateY(-50px);
            }
          }
        `}
      </style>
      <div style={style.container}>
        <div style={style.text}>환영해요!</div>
      </div>
    </>
  );
}
