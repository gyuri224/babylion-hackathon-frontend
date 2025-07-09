import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import styled from 'styled-components';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageButton from '../../components/previous';
import Phone from '../../components/Phone';
import MainButton from '../../components/MainButton';
import SignupInput from '../../components/signupinput';
import HeaderBars from '../../components/HeaderBarj';

const BASE_URL = "https://coffeeloging.duckdns.org";

// ✅ 토스트 메시지 함수는 컴포넌트 바깥 또는 맨 위에 위치
const showToast = (message) => {
  toast(message, {
    icon: false,
    style: {
      backgroundColor: '#FFEDDB',
      color: '#FF9223',
      fontWeight: '400',
      fontSize: '12px',
      width: '320px',
      height: '10px',
      lineHeight: '150%',
      fontFamily: "'Pretendard', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '100px'
    },
  });
};

function LoginSetting() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isLoginEnabled = id.trim() !== '' && password.trim() !== '';

  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(id)) {
      showToast('이메일 형식으로 입력해주세요');
      return;
    }

    if (!isLoginEnabled) return;

    try {
      const response = await axios.post(`${BASE_URL}/api/coffee/login`, {
        email:id,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        const res = await axios.get('https://example.com/api/data', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
});

        if (token) {
          localStorage.setItem('token', token);
        }
        if(nickname){
          localStorage.setItem('nickname',nickname);
        }
        navigate('/home');
      } else {
        showToast('아이디/비밀번호가 일치하지 않아요');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      if (error.response && error.response.status === 401) {
        showToast('아이디와 비밀번호가 일치하지 않아요');
      } else {
        showToast('서버 오류가 발생했습니다');
      }
    }
  };

  const wrapperStyle = {
    position: 'relative',
    marginBottom: '30px',
  };

  const iconButtonStyle = {
    position: 'absolute',
    right: '12px',
    top: '80%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#999',
    padding: 0,
    marginRight: '6px',
  };

  return (
    <Phone>
      <HeaderBars title="로그인" />

      <div style={wrapperStyle}>
        <SignupInput
          label="아이디"
          placeholder="아이디(이메일)을 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <ClearButton onClick={() => setId('')}>
          <MdClose size={20} color="#AEAEAE" />
        </ClearButton>
      </div>

      <div style={wrapperStyle}>
        <SignupInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          style={iconButtonStyle}
        >
          {showPassword ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
        </button>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        closeOnClick={false}
        pauseOnHover={false}
        draggable={false}
        theme="colored"
        transition={Slide}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      />

      <MainButton
        onClick={handleLogin}
        disabled={!isLoginEnabled}
        style={{
          backgroundColor: isLoginEnabled ? '#FF9223' : '#FF92234D',
          color: '#FCFCFC',
          cursor: isLoginEnabled ? 'pointer' : 'not-allowed',
          marginLeft: '9px',
          marginTop: '279px',
        }}
      >
        로그인
      </MainButton>
    </Phone>
  );
}

export default LoginSetting;

const ClearButton = styled.button`
  position: absolute;
  right: 20px;
  top: 46px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -10px;
`;
