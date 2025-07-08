import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import HeaderBars from '../../components/HeaderBarj';

import Phone from '../../components/Phone';
import Header1 from '../../components/Header';
import SignupInput from '../../components/signupinput';
import MainButton from '../../components/MainButton';
import { MdClose } from 'react-icons/md'; // X 아이콘 불러오기
import HeaderBar from '../../components/HeaderBar';
function NameInputPage() {
  

  const [name, setName] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const id = location.state?.id || '';
  const password = location.state?.password || '';

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const clearName = () => {
    setName('');
  };

  const isValidName = () => {
    if (!name) return false;

    const specialChars = '._-';
    const filtered = name.split('').filter(c =>
      /[가-힣a-zA-Z0-9]/.test(c) || specialChars.includes(c)
    ).join('');

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
    console.log("🔐 로그인 요청: ", {
      email: id,
      password,
    });

    const response = await axios.post('https://coffeeloging.duckdns.org/api/coffee/login', {
      email: id,
      password,
    });

    console.log("✅ 로그인 응답:", response.data);

    const token = response.data.token;
    if (token) {
      localStorage.setItem("accessToken", token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      navigate('/home');
    } else {
      alert('로그인 실패: 토큰이 존재하지 않습니다.');
    }

  } catch (error) {
    console.error('❌ 로그인 실패:', error);
    if (error.response) {
      console.error("❌ 서버 응답 상태:", error.response.status);
      console.error("❌ 서버 응답 본문:", error.response.data);
    }

    if (error.response && error.response.status === 401) {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
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
        {/* 항상 X 버튼을 표시 */}
        <ClearButton onClick={clearName} style={{marginRight:'-20px'}}>
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

// 스타일 정의
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