import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import { typography } from '../styles/typography';

const SubButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default SubButton;

const Button = styled.button`
  width: 327px;
  height: 32px;
  background: ${colors.main};
  color: ${colors.white};
  border: none;
  border-radius: 12px;
  font-size: ${typography.sub_title};;
  font-weight: ${typography.sub_title};;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
