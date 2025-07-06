import React from 'react';
import img1 from '../img/arrow-4957487_1280.jpg';

function ImageButton({ onClick, style }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'transparent', // 배경 제거
        border: 'none',                 // 테두리 제거
        padding: 0,                     // 여백 제거
        margin: 0,                      // 외부 여백 제거 (기본값 방지)
        cursor: 'pointer',             // 손가락 커서
        display: 'flex',               // 이미지 위치 정렬에 유리
        alignItems: 'center',
        justifyContent: 'center',
        ...style,                      // 상위에서 스타일 확장 가능
      }}
    >
      <img
        src={img1}
        alt="되돌아가기"
        style={{
          width: '20px',
          height: '20px',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </button>
  );
}

export default ImageButton;
