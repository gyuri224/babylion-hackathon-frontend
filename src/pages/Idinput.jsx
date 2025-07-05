import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageButton from '../components/previous';

function InputIdpage() {
  const [id, setId] = useState('');
  const navigate = useNavigate()
  const handlePrevious = () => {
    navigate('/login');
  };

  const handlepassword = () => {
    navigate('/password')
  };

  const styles = {
    wrapper: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 15px', // 패딩 줄임
      boxSizing: 'border-box',
      maxWidth: '480px',    // 최대 넓이 제한 (대부분 스마트폰 크기)
      margin: '0 auto',     // 가운데 정렬
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // 중앙 정렬로 변경
      fontSize: '18px',         // 글씨 크기 줄임
      marginTop: '10px',
      width: '100%',
      marginBottom: '20px',     // 음수 마진 제거하고 적절히 조절
      fontWeight: '600',
    },
    inputContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
    },
    input: {
      padding: '10px',
      fontSize: '1rem',
      border: 'none',
      borderBottom: '1px solid #ff6200',
      outline: 'none',
      width: '90%',
      transition: 'border-color 0.3s',

    },
    button: (isActive) => ({
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      backgroundColor: isActive ? '#ff6200' : '#ffbb76',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: isActive ? 'pointer' : 'not-allowed',
      marginTop: '20px',
      transition: 'background-color 0.3s',
    }),
    imageButtonWrapper: {
      position: 'fixed',
      top: '15px',
      left: '15px',
      cursor: 'pointer',
      zIndex: 1000,
    },
  };

  return (
    <>
      <div style={styles.imageButtonWrapper}>
        <ImageButton onClick={handlePrevious} 
        style={{marginTop:'20px'}}
        />
      </div>
      <div style={styles.wrapper}>
        <div style={styles.title}>회원가입</div>

        <div style={styles.inputContainer}>
          <label style={{ marginTop:'-400px', fontWeight: 'bold' }}>아이디</label>
          <input
            type="text"
            placeholder="ID를 입력하세요"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={styles.input}
          />
        </div>

        <button
          style={styles.button(!!id)}
          onClick={handlepassword}
          disabled={!id}
        >
          확인
        </button>
      </div>
    </>
  );
}

export default InputIdpage;
