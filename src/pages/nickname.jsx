import React, { useState } from 'react';
import ImageButton from '../components/previous';
import { useNavigate } from 'react-router-dom';

function NameInputPage() {
  const [name, setName] = useState('');
  const navigate=useNavigate();
const handlepre=()=>{
  navigate('/pwcheck');
};
  const handlenext= () =>{
    navigate('/con');
  };
  const isValidName = () => {
    if (!name) return false;

    const specialChars = '._-';

    // 허용 문자 필터링: 한글, 영문, 숫자, 특수기호
    const filtered = name.split('').filter(c => {
      return /[가-힣a-zA-Z0-9]/.test(c) || specialChars.includes(c);
    }).join('');

    if (filtered !== name) return false;

    // 국문+숫자+특수기호인지 확인
    if (/^[가-힣0-9._-]+$/.test(name)) {
      // 특수기호 제거 후 길이 체크
      const onlyKorNum = name.replace(/[._-]/g, '');
      return onlyKorNum.length >= 2 && onlyKorNum.length <= 5;
    }

    // 영문+숫자+특수기호인지 확인
    if (/^[a-zA-Z0-9._-]+$/.test(name)) {
      const onlyEngNum = name.replace(/[._-]/g, '');
      return onlyEngNum.length >= 3 && onlyEngNum.length <= 7;
    }

    return false;
  };

  const handleClear = () => setName('');

  const handleSubmit = () => {
    alert(`입력한 이름: ${name}`);
  };

  return (
    <div style={{padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <div>
      <ImageButton
      style={{marginTop:'10px'}}
      onClick={handlepre}/>
      <h1 style={{ textAlign: 'center',fontSize:'15px',marginTop:'-15px',fontWeight:'normal'}}>회원가입</h1>
      </div>
      <label style={{ fontSize:'20px',display: 'block', marginBottom: 8, fontWeight: 'bold' ,marginTop:'35px'}}>별명</label>
      <div style={{ position: 'relative', marginBottom: 10 ,marginTop:'35px'}}>
        <div style={{marginBottom:'40px'}}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="별명을 입력해주세요"
          style={{
            width: '85%',
            padding: '10px 40px 10px 10px',
            fontSize: 16,
            border: '1px solid #ff6200',
            borderTop:'none',
            borderRight:'none',
            borderLeft:'none',
            outline: 'none',
          }}
        />
      <div style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>
      국문2~5자,영문3~7자,숫자,특수문자(.,_,-)
      </div>
</div>
        {name && (
          <button
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'transparent',
              fontSize: 16,
              cursor: 'pointer',
              color: '#999',
            }}
            aria-label="입력 내용 지우기"
          >
            ×
          </button>
        )}
      </div>

      <button
        onClick={handlenext}
        disabled={!isValidName()}
        style={{
          width: '100%',
          padding: '12px',
          fontSize: 18,
          backgroundColor: isValidName() ? '#ff6200' : '#ffbb76',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          cursor: isValidName() ? 'pointer' : 'not-allowed',
          transition: 'background-color 0.3s',
          marginTop:'350px'
        }}
      >
        완료
      </button>
    </div>
  );
}

export default NameInputPage;
