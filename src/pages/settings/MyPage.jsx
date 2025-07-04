import React from 'react';
import styled from 'styled-components';
import { IoChevronForward } from 'react-icons/io5';
import colors from '../../styles/colors';
import PageContainer from '../../components/PageContainer';

const SettingsPage = () => {
  return (
    <PageContainer>
      <Wrapper>
        <SectionTitle>알림</SectionTitle>
        <SettingItem>
          <Label>시스템 알림 설정</Label>
          <ToggleSwitch defaultChecked />
        </SettingItem>
        <SettingItem>
          <Label>마케팅 정보 알림 설정</Label>
          <ToggleSwitch defaultChecked />
        </SettingItem>

        <Divider />

        <SettingItem>
          <Label>공지사항</Label>
          <IoChevronForward size={20} />
        </SettingItem>
        <SettingItem>
          <Label>FAQ</Label>
          <IoChevronForward size={20} />
        </SettingItem>
        <SettingItem>
          <Label>1:1 문의</Label>
          <IoChevronForward size={20} />
        </SettingItem>

        <Divider />

        <SectionTitle>약관 및 정책</SectionTitle>
        <SettingItem>
          <Label>이용약관</Label>
          <IoChevronForward size={20} />
        </SettingItem>
        <SettingItem>
          <Label>서비스 운영정책</Label>
          <IoChevronForward size={20} />
        </SettingItem>
        <SettingItem>
          <Label>스테이지 이용약관</Label>
          <IoChevronForward size={20} />
        </SettingItem>
        <SettingItem>
          <Label>기프트샵 이용약관</Label>
          <IoChevronForward size={20} />
        </SettingItem>
      </Wrapper>
    </PageContainer>
  );
};

export default SettingsPage;

const Wrapper = styled.div`
  padding: 24px 20px;
  background-color: ${colors.white};
`;

const SectionTitle = styled.div`
  margin: 16px 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black_sub};
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid #eee;
`;

const Label = styled.div`
  font-size: 16px;
  color: ${colors.black};
`;

const ToggleSwitch = styled.input.attrs({ type: 'checkbox' })`
  width: 40px;
  height: 22px;
  appearance: none;
  background-color: #ccc;
  border-radius: 20px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:checked {
    background-color: ${colors.main};
  }

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.2s;
  }

  &:checked::before {
    transform: translateX(18px);
  }
`;

const Divider = styled.div`
  height: 12px;
  background-color: #f4f4f4;
  margin: 16px 0;
`;

