import React from 'react';
import img2 from '../img/images.jpg';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate(); // 👈 페이지 이동 함수

  const handleLogin = () => {
    navigate('/loginsetting'); // 로그인 시 /loginsetting 으로 이동
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
        
        {/* 로그인 버튼 */}
        <button style={styles.loginButton} onClick={handleLogin}>
          로그인
        </button>

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
    color: '#aeaeae',
    fontSize: '14px',
    cursor: 'pointer',
  },
  divider: {
    width: '1px',
    backgroundColor: '#ccc',
    height: '14px',
    alignSelf: 'center',
  },
  image: {
    width: '80%',
    maxWidth: '400px',
    height: 'auto',
    marginBottom: '200px',
  },
};

export default LoginPage;
