import React from 'react';
import styled from 'styled-components';

function SignupInput({ label, placeholder, value, onChange, type = 'text' }) {
  return (
    <Box>
      <Label>{label}</Label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}

export default SignupInput;

const Box = styled.div`
  width: 360px;  // 🔧 입력창 넓이 늘림
  height: 77px;
  border: none;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 18px;
  color: #333;
  margin-bottom: 18px;
  font-family: Pretendard;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 93%;           // ✅ 입력창을 박스 전체에 맞춤
  height: 32px;
  font-size: 18px;
  padding-left: 0px;     // ✅ 텍스트를 왼쪽에 붙임
  border: none;
  border-bottom: 2px solid #FF9223;
  text-align: left;
  outline: none;

  &::placeholder {
    color: #aaa;
    opacity: 1;
  }
`;
