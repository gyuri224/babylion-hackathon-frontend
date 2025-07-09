import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import HeaderBars from '../../components/HeaderBarj';
import Phone from '../../components/Phone';
import SignupInput from '../../components/signupinput';
import MainButton from '../../components/MainButton';
import { MdClose } from 'react-icons/md';

function NameInputPage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state?.id || '';
  const password = location.state?.password || '';
  const confirmPassword = location.state?.confirmPassword || ''; // 🔧 수정

  const handleChange = (e) => setName(e.target.value);

  const clearName = () => setName('');

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

    try {
      // 1. 회원가입 요청
      const signupRes = await axios.post('https://coffeeloging.duckdns.org/api/coffee/signup', {
        email: id,
        password,
        confirmPassword,
        nickname: name,
      });

      // 2. 로그인 요청
      const loginRes = await axios.post('https://coffeeloging.duckdns.org/api/coffee/login', {
        email: id,
        password,
      });

      const token = loginRes.data.token;
      if (token) {
        localStorage.setItem("accessToken", token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        navigate('/home');
      } else {
        alert('로그인 실패: 토큰이 존재하지 않습니다.');
      }

    } catch (error) {
      console.error('에러 발생:', error);
      if (error.response?.status === 409) {
        alert('이미 존재하는 계정입니다.');
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
        <SignupInput
          label="별명"
          placeholder="별명을 입력해주세요"
          value={name}
          onChange={handleChange}
        />
        <ClearButton onClick={clearName} style={{ marginRight: '-20px' }}>
          <MdClose size={20} color={name ? '#888' : '#ccc'} />
        </ClearButton>
        <Message style={{ marginLeft: '16px' }}>
          국문 2~5자, 영문 3~7자, 숫자, 특수기호(. _ -)
        </Message>
      </InputWrapper>

      <MainButton
        onClick={handleNext}
        disabled={!isValidName()}
        style={{
          backgroundColor: isValidName() ? '#ff9223' : '#ffbb76',
          marginTop: '379px',
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

// 스타일
const InputWrapper = styled.div`
  position: relative;
`;

const Message = styled.p`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
  margin-left: 2px;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 25px;
  top: 44px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
`;
