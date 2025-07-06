import React, { useState } from 'react';
import ImageButton from '../components/previous';
import { useNavigate } from 'react-router-dom';

function WindowSelector() {
  const [activeWindow, setActiveWindow] = useState(null);

  const handlesearch = () => {
    navigate('/home');
  };
  const navigate=useNavigate();

  const outerContainer = {
    backgroundColor: '#fff',
    height: '100vh',
    width: '100%',
    maxWidth: '375px',
    margin: '0 auto',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    width: '100%',
    height: '60px',
    fontSize: '18px',
    fontWeight: 'bold',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'white',
    cursor: 'pointer',
    marginTop:'20px'
  };

  const popupStyle = {
    width: '100%',
    backgroundColor: '#fcfcfc',
    border: '1px solid black',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginTop: '10px',
  };

  const closeButtonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <>
      {/* 상단 UI */}
      <div>
        <ImageButton style={{ marginLeft: '10px', marginTop: '30px' }} onClick={handlesearch} />
      </div>
      <div style={{ marginLeft: '200px', marginTop: '-20px' }}>커피말고</div>
      <div style={{ width: '100%', height: '50px', backgroundColor: 'grey', color: 'white' }}>
        광고
      </div>

      {/* 본문 */}
      <div style={outerContainer}>
        {/* 첫 번째 위치 */}
        {activeWindow === 'window1' ? (
          <div style={popupStyle}>
            <h2 style={{ color: '#ff9223' }}>레몬수</h2>
            <p>더운 여름엔 수분 섭취가 중요해요</p>
            <button style={closeButtonStyle} onClick={() => setActiveWindow(null)}>닫기</button>
          </div>
        ) : (
          <button style={buttonStyle} onClick={() => setActiveWindow('window1')}>
            이번주 추천 음료
          </button>
        )}

        {/* 두 번째 위치 */}
        {activeWindow === 'window2' ? (
          <div style={popupStyle}>
            <h2 style={{ color: '#ff9223' }}>블루베리</h2>
            <p>상큼달콤한 핑거 푸드</p>
            <button style={closeButtonStyle} onClick={() => setActiveWindow(null)}>닫기</button>
          </div>
        ) : (
          <button style={buttonStyle} onClick={() => setActiveWindow('window2')}>
            이번주 추천 음식
          </button>
        )}
      </div>
    </>
  );
}

export default WindowSelector;
