
import React from 'react';
import img2 from '../../img/images.jpg';
import { useNavigate } from 'react-router-dom';
import MainButton from '../../components/MainButton';

function LoginPage() {
  const navigate = useNavigate(); // 👈 페이지 이동 함수

  const handleLogin = () => {
    navigate('/api/coffee/login'); // 로그인 시 /loginsetting 으로 이동
  };

  const handleSignup = () => {
    navigate('/idinput'); // 회원가입 시 /idinput으로 이동
  };
  const handlesearch =()=> {
    navigate('/login')

  };
  return (
    <div style={styles.wrapper}>
      <div style={styles.page}>
        <div style={{ flexGrow: 1 }} />
        <img src={img2} alt="중앙 이미지" style={styles.image} />
        
        <MainButton onClick={handleLogin} style={{marginBottom:'14px'}}>
          로그인
        </MainButton>
        {/* 회원가입 + 아이디/비밀번호 찾기 */}
        <div style={styles.subButtons}>
          <button style={styles.linkButton} onClick={handleSignup}>
            회원가입
          </button>
          <div style={styles.divider} />
          <button style={styles.linkButton}onClick={handlesearch}>
            아이디/비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  page: {
    width: '100%',
    maxWidth: '400px',
    height: '100%',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  loginButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#ff6200',
    color: '#fff',
    fontSize: '18px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '16px',
  },
  subButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#AEAEAE',
    fontSize: '14px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '150%', 
    fontFamily: 'Pretendard, sans-serif',
    marginBottom:'41px'
  },

  image: {
    width: '111px',
    height: '38px',
    marginBottom:'252px'
  },
};

export default LoginPage;
