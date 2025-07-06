import React from 'react';
import Phone from '../../components/Phone';
import Header1 from '../../components/Header';
import blue from '../../img/berry.jpg';
import lemon from '../../img/lemonwater.jpg';

function PageWithTwoWindows() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
  };

  const boxStyle = {
    width: '90%',
    maxWidth: '330px',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '10px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '250px',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '12px',
  };

  const titleStyle = {
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#ff9223',
    marginTop: '8px',
    alignSelf: 'flex-start',
    textAlign: 'left',
  };

  const descStyle = {
    fontSize: '14px',
    color: '#555',
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginTop: '4px',
  };

  const smallBoxStyle = {
    backgroundColor: '#f0f0f0',
    padding: '8px 12px',
    borderRadius: '8px',
    marginTop: '10px',
    fontSize: '13px',
    color: '#333',
    lineHeight: '1.4',
    textAlign: 'left',
    alignSelf: 'flex-start',
  };

  return (
    <Phone>
      <div style={containerStyle}>
        <Header1 title="커피 말고" />

        {/* 레몬수 박스 */}
        <div style={boxStyle}>
          <div style={{
            alignSelf: 'flex-start',
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '3px',
            marginTop: '-10px',
          }}>
            이번주 추천 음료
          </div>
          <img src={lemon} alt="레몬" style={imageStyle} />
          <div style={{ width: '100%' }}>
            <div style={titleStyle}>레몬수</div>
            <div style={descStyle}>만드는 법:<br/>레몬 반 개(레몬즙)를 물 500ml와 섞어 마셔요</div>

            {/* 🔽 추가된 설명 박스 */}
            <div style={smallBoxStyle}>
              비타민 C가 풍부한<br />
              상큼한 홈메이드 음료입니다.
            </div>
          </div>
        </div>

        {/* 블루베리 박스 */}
        <div style={boxStyle}>
          <div style={{
            alignSelf: 'flex-start',
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '3px',
            marginTop: '-10px',
          }}>
            이번주 추천 음식
          </div>
          <img src={blue} alt="블루베리" style={imageStyle} />
          <div style={{ width: '100%' }}>
            <div style={{ ...titleStyle, color: '#6a0dad' }}>블루베리</div>
            <div style={descStyle}>상큼하게 하루를 시작하세요!</div>

            {/* 🔽 추가된 설명 박스 */}
            <div style={smallBoxStyle}>
작은 크기에도 불구하고 비타민과 항산화 성분이 풍부해 꾸준히 먹으면 건강에 좋아요
            </div>
          </div>
        </div>
      </div>
    </Phone>
  );
}

export default PageWithTwoWindows;
