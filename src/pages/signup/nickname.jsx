import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Phone from '../../components/Phone';
import Header1 from '../../components/Header';
import SignupInput from '../../components/signupinput';
import MainButton from '../../components/MainButton';
import { MdClose } from 'react-icons/md'; // X 아이콘 불러오기

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
      const response = await axios.post('http://localhost:4000/signup', {
        id,
        password,
        name,
      });

      if (response.status === 200) {
        navigate('/con', { state: { id, password, name } });
      } else {
        alert(response.data.message || '회원가입에 실패했습니다.');
      }
    } catch (error) {
      console.error('회원가입 요청 실패:', error);
      if (error.response && error.response.data) {
        alert(error.response.data.message || '회원가입에 실패했습니다.');
      } else {
        alert('서버와 연결에 실패했습니다.');
      }
    }
  };

  return (
    <Phone>
      <Header1 title="회원가입" />

      <InputWrapper>
        <SignupInput
          label="별명"
          placeholder="별명을 입력해주세요"
          value={name}
          onChange={handleChange}
        />
        {/* 항상 X 버튼을 표시 */}
        <ClearButton onClick={clearName}>
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
          marginTop: '440px',
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
