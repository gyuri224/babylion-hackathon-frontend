import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

const SliderContainer = ({ children, style, ...props }) => (
  <Overlay>
    <Sheet style={style} {...props}>
      <HandleBar />
      {children}
    </Sheet>
  </Overlay>
);

export default SliderContainer;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.25);
  z-index: 9999;
  display: flex;
  align-items: flex-end;
`;

const Sheet = styled.div`
  width: 100vw;
  max-width: 400px;
  min-width: 320px;
  margin: 0 auto;
  background: ${colors.white};
  border-radius: 32px 32px 0 0;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.12);
  padding-top: 16px;
  position: relative;
  animation: slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
`;

const HandleBar = styled.div`
  width: 134px;
  height: 5px;
  background: ${colors.black};
  border-radius: 100px;
  margin: 0 auto 16px auto;
`;
