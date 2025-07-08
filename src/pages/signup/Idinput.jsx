import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupInput from '../../components/signupinput';
import HeaderBars from '../../components/HeaderBarj';
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

  // ✅ 공통 토스트 출력 함수
  const showToast = (message) => {
    toast(message, {
      icon: false,
      style: {
        backgroundColor: '#FFEDDB',
        color: '#FF9223',
        fontWeight: '400',
        fontSize: '12px',
        width: '327px',
        height: '32px',
        lineHeight: '150%',
        fontFamily: "'Pretendard', sans-serif",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  };

  const handlePassword = async () => {
    let exists = false;

    try {
      const response = await axios.post(
      'https://coffeeloging.duckdns.org/api/coffee/check-email', {
        email: id,
      });
      exists = response.data.exists;
    } catch (error) {
      showToast('서버 오류: 이메일 확인 실패');
      return;
    }

    if (exists) {
      showToast('이미 회원가입된 아이디예요');
      return;
    }

    if (!isEmail(id)) {
      showToast('이메일 형식으로 작성해주세요');
      return;
    }

    showToast('사용 가능한 이메일입니다!');
    setTimeout(() => {
      navigate('/password', { state: { id } });
    }, 1500);
  };

  return (
    <Phone>
      <HeaderBars title="회원가입" />

      <InputWrapper>
        <SignupInput
          label="아이디"
          placeholder="아이디(이메일)을 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ marginLeft: '4px' }}
        />
        <ClearButton
          style={{ marginRight: '-10px' }}
          onClick={() => {
            if (id) setId('');
          }}
        >
          <MdClose size={20} color="#AEAEAE" />
        </ClearButton>
      </InputWrapper>

      <MainButton
        onClick={handlePassword}
        disabled={!id.trim()}
        style={{
          marginLeft: '10px',
          marginTop: '415px',
          backgroundColor: id.trim() ? '#FF9223' : '#FF92234D',
          color: 'white',
          height: '48px',
          cursor: id.trim() ? 'pointer' : 'not-allowed',
        }}
      >
        다음
      </MainButton>

      {/* ✅ 버튼 바로 위 중앙 정렬된 토스트 컨테이너 */}
      <div
        style={{
          position: 'fixed',
          bottom: '60px', // 버튼 바로 위 위치
          left: 0,
          right: 0,
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none', // 바깥 클릭 방지
        }}
      >
        <ToastContainer
          autoClose={2000}
          hideProgressBar
          closeOnClick={false}
          pauseOnHover={false}
          draggable={false}
          theme="colored"
          style={{
            width: '327px', // 토스트 너비 고정
            pointerEvents: 'auto', // 토스트 내 클릭 가능
          }}
        />
      </div>
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
