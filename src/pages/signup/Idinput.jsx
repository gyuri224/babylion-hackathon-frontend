// src/pages/signup/Idinput.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupInput from '../../components/signupinput';
import Header1 from '../../components/Header';
import MainButton from '../../components/MainButton';
import styled from 'styled-components';
import Phone from '../../components/Phone';
import { MdClose } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function InputIdpage() {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const isEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handlePassword = async () => {
    // 1. 이메일 중복 확인 (형식과 무관하게 항상 먼저)
    let exists = false;
    try {
      const response = await axios.post('http://localhost:8080/api/coffee/check-email', {
        email: id,
      });
      exists = response.data.exists;
    } catch (error) {
      toast.error('서버 오류: 이메일 확인 실패');
      return;
    }

    // 2. 이미 존재하는 이메일일 경우
    if (exists) {
      toast.error('이미 존재하는 이메일입니다.');
      return;
    }

    // 3. 중복은 아니지만 이메일 형식이 틀린 경우
    if (!isEmail(id)) {
      toast.error('이메일 형식이 올바르지 않습니다.');
      return;
    }

    // 4. 모두 통과 - id값을 다음 페이지에 state로 전달
    toast.success('사용 가능한 이메일입니다!');
    navigate('/password', { state: { id } });
  };

  return (
    <Phone>
      <Header1 title="회원가입" />
      <InputWrapper>
        <SignupInput
          label="아이디"
          placeholder="아이디(이메일)을 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {id && (
          <ClearButton onClick={() => setId('')}>
            <MdClose size={20} color="#888" />
          </ClearButton>
        )}
      </InputWrapper>

      <MainButton
        onClick={handlePassword}
        disabled={!id.trim()}
        style={{
          marginLeft: '10px',
          marginTop: '470px',
          backgroundColor: id.trim() ? '#FF9223' : '#FF92234D',
          color: 'white',
          height: '48px',
          cursor: id.trim() ? 'pointer' : 'not-allowed',
        }}
      >
        다음
      </MainButton>

      <ToastContainer position="top-center" autoClose={2000} />
    </Phone>
  );
}

export default InputIdpage;

const InputWrapper = styled.div`
  position: relative;
`;

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
`;
