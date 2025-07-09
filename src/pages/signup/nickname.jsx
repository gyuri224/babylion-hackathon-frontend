import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import HeaderBars from '../../components/HeaderBarj';
import Phone from '../../components/Phone';
import SignupInput from '../../components/signupinput';
import MainButton from '../../components/MainButton';
import { MdClose } from 'react-icons/md';
import { IoEye, IoEyeOff } from 'react-icons/io5';

function NameInputPage() {
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // ✅ 추가됨
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state?.id || '';
  const password = location.state?.password || '';

  const handleChange = (e) => setName(e.target.value);
  const clearName = () => setName('');
  const clearConfirmPassword = () => setConfirmPassword('');

  const isValidName = () => {
    if (!name) return false;
    const specialChars = '._-';
    const filtered = name
      .split('')
      .filter(c => /[가-힣a-zA-Z0-9]/.test(c) || specialChars.includes(c))
      .join('');

    if (filtered !== name) return false;

    if (/^[가-힣0-9._-]+$/.test(name)) {
      const onlyKorNum = name.replace(/[._-]/g, '');
      return onlyKorNum.length >= 2 && onlyKorNum.length <= 5;
    }

    if (/^[a-zA-Z0-9._-]+$/.test(name)) {
      const onlyEngNum = name.replace(/[._-]/g, '');
      return onlyEngNum.length >= 3 && onlyEngNum.length <= 7;
    }

    return false;
  };

  const handleNext = async () => {
    if (!isValidName()) {
      alert('별명을 올바르게 입력해주세요.');
      return;
    }

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      // 회원가입 요청
      const signupRes = await axios.post('https://coffeeloging.duckdns.org/api/coffee/signup', {
        email: id,
        password,
        confirmPassword,
        nickname: name,
      });

      // 로그인 요청
      const loginRes = await axios.post('https://coffeeloging.duckdns.org/api/coffee/login', {
        email: id,
        password,
      });

      const token = loginRes.data.token;
      if (token) {
        localStorage.setItem('accessToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        navigate('/home');
      } else {
        alert('로그인 실패: 토큰이 존재하지 않습니다.');
      }
    } catch (error) {
      console.error('에러 발생:', error);
      if (error.response?.status === 409) {
        alert(error.response.data?.message || '이미 존재하는 계정입니다.');
      } else if (error.response?.status === 401) {
        alert('아이디 또는 비밀번호가 틀렸습니다.');
      } else {
        alert('서버 오류가 발생했습니다.');
      }
    }
  };

  return (
    <Phone>
      <HeaderBars title="회원가입" />
      <InputWrapper>
        {/* 별명 입력 */}
        <SignupInput
          label="별명"
          placeholder="별명을 입력해주세요"
          value={name}
          onChange={handleChange}
        />
        <ClearButton onClick={clearName}>
          <MdClose size={20} color={name ? '#888' : '#ccc'} />
        </ClearButton>
        <Message>국문 2~5자, 영문 3~7자, 숫자, 특수기호(. _ -)</Message>

        {/* 비밀번호 확인 입력 */}
        <SignupInput
        
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          type={showPassword ? 'text' : 'password'}  
          value={confirmPassword}
          
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <ClearButton onClick={clearConfirmPassword}>
          <MdClose size={20} color={confirmPassword ? '#888' : '#ccc'} />
        </ClearButton>

        {/* 눈 아이콘 버튼 */}
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IoEyeOff /> : <IoEye />}
        </ToggleButton>
      </InputWrapper>

      <MainButton
        onClick={handleNext}
        disabled={!isValidName()}
        style={{
          backgroundColor: isValidName() ? '#ff9223' : '#ffbb76',
          marginTop: '309px',
          marginLeft: '9px',
          color: 'white',
        }}
      >
        다음
      </MainButton>
    </Phone>
  );
}

export default NameInputPage;

// ⭐ 스타일 컴포넌트
const InputWrapper = styled.div`
  position: relative;
`;

const Message = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
  margin-left: 16px;
  margin-bottom: 17px;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 25px;
  top: 44px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  margin-right: -19px;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 20px;
  top: 160px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #AEAEAE;
  margin-Right: -14px
`;
