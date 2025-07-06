import React, { useState } from 'react';
import ImageButton from '../components/previous';
import { useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa'; // 체크 아이콘 추가

function Password() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [conditions, setConditions] = useState({
    length: false,
    letter: false,
    number: false,
    special: false,
  });

  const navigate = useNavigate();

  const handlenext=()=>{
    navigate('/pwcheck',{state:{password}})   
  };//여기에 다음버튼을 누르면 넘어가게 넣기

  const handlepre = () => {
    navigate('/idinput');
  };

  const checkPasswordConditions = (pwd) => {
    return {
      length: pwd.length >= 8,
      letter: /[A-Za-z]/.test(pwd),
      number: /\d/.test(pwd),
      special: /[!@#$%^&*()\-=+{};:,<.>]/.test(pwd),
    };
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setConditions(checkPasswordConditions(value));
  };

  const isAllValid = Object.values(conditions).every((v) => v === true);

  return (
    <>
      <div style={{ marginLeft: '180px', marginTop: '25px' }}>회원가입</div>
      <ImageButton style={{ marginTop: '-25px', marginLeft: '15px' }} onClick={handlepre} />

      <div style={styles.page}>
        <h2 style={{ fontSize: '15px', fontWeight: 'bold' }}>비밀번호</h2>

        <div style={styles.inputWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
            placeholder="비밀번호 입력"
            style={styles.input}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
            type="button"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>

        <ul style={styles.checkList}>
          <CheckItem label="8자 이상" checked={conditions.length} />
          <CheckItem label="영문 포함" checked={conditions.letter} />
          <CheckItem label="숫자 포함" checked={conditions.number} />
          <CheckItem label="특수문자 포함" checked={conditions.special} />
        </ul>

        <button
          style={{ ...styles.button, backgroundColor: isAllValid ? '#ff9223' : '#ffbb76' ,
            marginTop:'300px'
          }}
          disabled={!isAllValid}
          onClick={handlenext}
        >
          다음
        </button>
      </div>
    </>
  );
}

function CheckItem({ label, checked }) {
  return (
    <li style={styles.checkItem}>
      <FaCheckCircle style={{ color: checked ? 'green' : 'gray', marginRight: '8px' }} />
      <span>{label}</span>
    </li>
  );
}

const styles = {
  page: {
    maxWidth: '375px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    height: '30px',
    fontSize: '16px',
    padding: '8px',
    border: 'none',
    borderBottom: '1px solid #ff9223',
    outline:'none'
  },
  eyeButton: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#666',
  },
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
