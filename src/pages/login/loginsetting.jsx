import ImageButton from '../../components/previous';
import React, { useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Phone from '../../components/Phone';
import MainButton from '../../components/MainButton';
import Header1 from '../../components/Header';
import SignupInput from '../../components/signupinput';
import axios from 'axios';

function LoginSetting() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isLoginEnabled = id.trim() !== '' && password.trim() !== '';

  const handleLogin = async () => {
  if (!isLoginEnabled) return;

  try {
    const response = await axios.post('http://localhost:8080/api/coffee/login', {
      email: id,
      password,
    });

    const token = response.data.token;
    if (token) {
      localStorage.setItem("accessToken", token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      navigate('/home');
    } else {
      alert('로그인 실패: 토큰이 존재하지 않습니다.');
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


  // 아이콘 겹치기용 스타일
  const wrapperStyle = {
    position: 'relative',
    marginBottom: '30px',
  };

const iconButtonStyle = {
  position: 'absolute',
  right: '12px',
  top: '80%', // ✅ 기존 50% → 60%로 내림 (더 아래로 내려감)
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#999',
  padding: 0,
  };

  return (
    <Phone>
      <Header1 title="로그인" />

      {/* 아이디 입력창 + X 버튼 */}
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

      {/* 비밀번호 입력창 + 눈 아이콘 */}
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
          {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
        </button>
      </div>

      {/* 로그인 버튼 */}
      <MainButton
        onClick={handleLogin}
        disabled={!isLoginEnabled}
        style={{
          backgroundColor: isLoginEnabled ? '#ff6200' : '#ffbb76',
          color: '#fff',
          cursor: isLoginEnabled ? 'pointer' : 'not-allowed',
          marginTop: '300px',
        }}
      >
        로그인
      </MainButton>
    </Phone>
  );
}

export default LoginSetting;
