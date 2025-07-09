import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import styled from 'styled-components';
import HeaderBars from '../../components/HeaderBarj';
import Phone from '../../components/Phone';
import SignupInput from '../../components/signupinput';
import MainButton from '../../components/MainButton';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PasswordCheck() {
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state?.id || '';
  const password = location.state?.password || '';
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isMatch = password === confirmPassword;

  const handleNext = () => {
    if (!isMatch) {
      toast('비밀번호가 일치하지 않습니다.', {
        style: {
          backgroundColor: '#FFEDDB',
          color: '#FF9223',
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '150%',
          fontFamily: 'Pretendard, sans-serif',
          width: '327px',
          height: '32px',
          marginBottom: '100px',
        },
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
      return;
    }

    // ✅ confirmPassword 함께 전달
    navigate('/api/coffee/signup', {
      state: { id, password, confirmPassword },
    });
  };

  return (
    <Phone>
      <HeaderBars title="회원가입" />

      <InputWrapper>
        <SignupInput
          type={showPassword ? 'text' : 'password'}
          label="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IoEyeOff /> : <IoEye />}
        </ToggleButton>
      </InputWrapper>

      <MainButton
        onClick={handleNext}
        disabled={confirmPassword === ''}
        style={{
          marginTop: '416px',
          backgroundColor: confirmPassword ? '#ff9223' : '#FF92234D',
          color: 'white',
          marginLeft: '9px',
          cursor: confirmPassword ? 'pointer' : 'not-allowed',
        }}
      >
        다음
      </MainButton>

      <ToastContainer />
    </Phone>
  );
}

export default PasswordCheck;

// styled-components
const InputWrapper = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 20px;
  top: 45px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #AEAEAE;
  margin-right: -14px;
`;
