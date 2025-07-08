import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import styled from 'styled-components';
import HeaderBars from '../../components/HeaderBarj';
import Phone from '../../components/Phone';
import Header1 from '../../components/Header';
import SignupInput from '../../components/signupinput';
import MainButton from '../../components/MainButton';
import HeaderBar from '../../components/HeaderBar';


function PasswordCheck() {
  const location = useLocation();
  const navigate = useNavigate();

  // 전달받은 id, password
  const id = location.state?.id || '';
  const password = location.state?.password || '';

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isMatch = password === confirmPassword;


  // 항상 다음 페이지(/name)로 id, password 전달
  const handleNext = () => {
    navigate('/api/coffee/signup', { state: { id, password } });
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
        style={{
          marginTop: '377px',
          backgroundColor: '#ff9223',
          color: 'white',
          marginLeft: '9px',
        }}
      >
        다음
      </MainButton>
    </Phone>
  );
}

export default PasswordCheck;

// styled-components 정의
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
  color:#AEAEAE;
`;