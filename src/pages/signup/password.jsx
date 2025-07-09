import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';
import Phone from '../../components/Phone';
import SignupInput from '../../components/signupinput';
import Header1 from '../../components/Header';
import MainButton from '../../components/MainButton';
import HeaderBar from '../../components/HeaderBar';
import HeaderBars from '../../components/HeaderBarj';
function Password() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [conditions, setConditions] = useState({
    length: false,
    letter: false,
    number: false,
    special: false,
  });

  const [id, setId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.id) {
      setId(location.state.id);
    }
  }, [location.state]);

  const handleNext = () => {
    navigate('/pwcheck', { state: { password, id } });
  };


  const checkPasswordConditions = (pwd) => ({
    length: pwd.length >= 8,
    letter: /[A-Za-z]/.test(pwd),
    number: /\d/.test(pwd),
    special: /[!@#$%^&*()\-=+{};:,<.>]/.test(pwd),
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setConditions(checkPasswordConditions(value));
  };

  const isAllValid = Object.values(conditions).every(Boolean);

  return (
    <Phone>
      <HeaderBars title="회원가입" />

      <InputWrapper>
        <SignupInput
          type={showPassword ? 'text' : 'password'}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handleChange}
        />
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <IoEyeOff /> : <IoEye />}
        </ToggleButton>
      </InputWrapper>
      <div style={{marginLeft:'15px'}}>
      <ul style={styles.checkList}>
        <CheckItem label="8자 이상" checked={conditions.length} />
        <CheckItem label="영문 포함" checked={conditions.letter} />
        <CheckItem label="숫자 포함" checked={conditions.number} />
        <CheckItem label="특수문자 포함" checked={conditions.special} />
      </ul>
      </div>
      <MainButton
  onClick={handleNext}
  disabled={!isAllValid}      // 여기 isMatch -> isAllValid 로 변경
  style={{
    marginTop: '259px',
    marginLeft:"9px",
    backgroundColor: isAllValid ? '#ff9223' : '#ffbb76',  // 마찬가지로 isMatch -> isAllValid
    color: 'white',
  }}
>
  다음
        </MainButton>

    </Phone>
  );
}

function CheckItem({ label, checked }) {
  return (
    <li style={styles.checkItem}>
      <FaCheckCircle
        style={{
          color: checked ? '#ff9223' : 'gray', // 체크 아이콘 색
          marginRight: '8px',
        }}
      />
      <span style={{ color: '#000' }}>{label}</span> {/* 항상 검정색 텍스트 */}
    </li>
  );
}

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
`;

const styles = {
  checkList: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '30px',
  },
  checkItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '15px',
  },
  button: {
    width: '100%',
    height: '45px',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Password;