import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import ImageButton from '../components/previous';

function PasswordCheck() {
  const location = useLocation();
  const navigate = useNavigate();
  const originalPassword = location.state?.password || ''; // 넘겨받은 비밀번호

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isMatch = originalPassword === confirmPassword;

  const handleBack = () => {
    navigate('/password'); // 비밀번호 입력 페이지로 이동
  };

  const handleNext = () => {
    if (isMatch) {

    navigate('/name'); 
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <>
      <div style={{ marginLeft: '180px', marginTop: '25px' }}>비밀번호 확인</div>
      <ImageButton style={{ marginTop: '-25px', marginLeft: '15px' }} onClick={handleBack} />

      <div style={styles.page}>
        <h2 style={{ fontSize: '15px', fontWeight: 'bold' }}>비밀번호 확인</h2>

        <div style={styles.inputWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호 재입력"
            style={styles.input}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
            type="button"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>

        {confirmPassword && (
          <div style={{ marginTop: '10px', fontSize: '14px', color: isMatch ? 'green' : 'red' }}>
            {isMatch ? '비밀번호가 일치합니다' : '비밀번호가 일치하지 않습니다'}
          </div>
        )}

        <button
          style={{
            ...styles.button,
            backgroundColor: isMatch ? '#ff9223' : '#ffbb76',
            marginTop: '430px',
          }}
          disabled={!isMatch}
          onClick={handleNext}
        >
          다음
        </button>
      </div>
    </>
  );
}

const styles = {
  page: {
    maxWidth: '375px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    height: '30px',
    fontSize: '16px',
    padding: '8px',
    border: 'none',
    borderBottom: '1px solid #ff9223',
    outline: 'none',
  },
  eyeButton: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#666',
  },
  button: {
    width: '100%',
    height: '45px',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default PasswordCheck;
