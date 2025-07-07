import ImageButton from '../../components/previous';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Phone from '../../components/Phone';
import MainButton from '../../components/MainButton';
import SignupInput from '../../components/signupinput';
import axios from 'axios';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import HeaderBar from '../../components/HeaderBar';
import HeaderBars from '../../components/HeaderBarj';
import { ToastContainer } from 'react-toastify';
import { Slide } from 'react-toastify';

function LoginSetting() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();



  const isLoginEnabled = id.trim() !== '' && password.trim() !== '';

  const handleLogin = async () => {
    if (!isLoginEnabled) return;

    try {
      const response = await axios.post('/api/coffee/login', {
        id,
        password,
      });

      if (response.status === 200) {
        navigate('/home');
      } else {
        alert('로그인 실패: 서버 응답이 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      if (error.response && error.response.status === 401) {
        alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      } else {
        alert('서버 오류가 발생했습니다.');
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
        <button onClick={() => setId('')} style={iconButtonStyle} >
          <MdClose size={20} />
        </button>
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
          {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
        </button>
        </div>
    

      <MainButton
        onClick={handleLogin}
        disabled={!isLoginEnabled}
        style={{
          backgroundColor: isLoginEnabled ? '#FF9223' : '#FF92234D',
          color: '#FCFCFC',
          cursor: isLoginEnabled ? 'pointer' : 'not-allowed',
          marginLeft:'9px',
          marginTop:'240px'
        }}
      >
        로그인
      </MainButton>
      <ToastContainer
position="bottom-center"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Slide}
/>
    </Phone>

  );
}

export default LoginSetting;
