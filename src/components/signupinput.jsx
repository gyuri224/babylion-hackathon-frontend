
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
  width: 327px;  // 🔧 입력창 넓이 늘림
  height: 77px;
  border: none;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding:0;
  margin-left: 4px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 21px;
  font-weight: 600;
  line-height: 120%;
  font-family: Pretendard, sans-serif;
`;

const StyledInput = styled.input`
  width: 327px;
  height: 34px;
  font-size: 18px;
  padding-left: 0px;
  border: none;
  border-bottom: 2px solid #FF9223;
  text-align: left;
  outline: none;
  font-weight: 600;          // ✅ 600 → 500 (검은 선 제거 효과 있음)
  line-height: 140%;         // ✅ 줄 높이 여유 줌
  font-family: Pretendard, sans-serif;

  &::placeholder {
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    font-family: Pretendard, sans-serif;
    color: #AEAEAE;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;


