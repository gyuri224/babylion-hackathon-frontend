import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { typography } from '../styles/typography';

const MainButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default MainButton;

const Button = styled.button`
  width: 327px;
  height: 48px;
  background: ${colors.main};
  color: ${colors.white};
  border: none;
  border-radius: 12px;
  ${typography.sub_title};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
