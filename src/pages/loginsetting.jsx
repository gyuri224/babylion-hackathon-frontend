import ImageButton from '../components/previous';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function LoginSetting() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handlehome=() =>{
    navigate('/home')
  };
  const navigate=useNavigate();

  const handlepre = () => {
    navigate('/login'); 
  };


  const isLoginEnabled = id.trim() !== '' && password.trim() !== '';

  const styles = {
    container: {
      width: '100%',
      height: '90vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', // ✅ 버튼이 맨 아래에 안 붙도록
      backgroundColor: '#fff',
      padding: '40px 20px',
      boxSizing: 'border-box',
    },
    formArea: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
      position: 'relative',
    },
    input: {
      flex: 1,
      padding: '12px 40px 12px 0px',
      fontSize: '16px',
      width: '100%',
      border: 'none',
      borderBottom: '1px solid #ff9223',
      backgroundColor: 'transparent',
      outline: 'none',
    },
    iconButton: {
      position: 'absolute',
      right: '12px',
      cursor: 'pointer',
      color: '#999',
    },
    loginButton: {
      padding: '20px', 
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      backgroundColor: isLoginEnabled ? '#ff6200' : '#ffbb76',
      color: '#fff',
      cursor: isLoginEnabled ? 'pointer' : 'not-allowed',
      width: '100%',
      opacity: isLoginEnabled ? 1 : 0.6,
      transition: 'all 0.2s ease',
      marginTop: '300px', // ✅ 살짝 위로 띄우기
    }
  };

  return (
    <>
      {/* 뒤로가기 버튼 */}
    <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
    <ImageButton onClick={handlepre}/>
    <div style={{ fontSize: '18px', fontWeight: 'normal', marginLeft: '150px' }}>로그인</div>
    </div>


      {/* 로그인 폼 전체 영역 */}
      <div style={styles.container}>
        <div style={styles.formArea}>
          {/* 아이디 입력 */}
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>아이디</div>
          <div style={styles.inputContainer}>
            <input
              type="text"
              placeholder="아이디(이메일)을 입력해주세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
              style={styles.input}
            />
            {id && (
              <MdClose
                size={22}
                style={styles.iconButton}
                onClick={() => setId('')}
              />
            )}
          </div>

          {/* 비밀번호 입력 */}
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>비밀번호</div>
          <div style={styles.inputContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            {password && (
              showPassword ? (
                <IoEyeOff
                  size={22}
                  style={styles.iconButton}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <IoEye
                  size={22}
                  style={styles.iconButton}
                  onClick={() => setShowPassword(true)}
                />
              )
            )}
          </div>
        </div>

        {/* 로그인 버튼 */}
        <button
          style={styles.loginButton}
          onClick={handlehome}
          disabled={!isLoginEnabled}
        >
          로그인
        </button>
      </div>
    </>
  );
}

export default LoginSetting;
