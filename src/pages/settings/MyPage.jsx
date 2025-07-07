import React from 'react';
import styled from 'styled-components';
import { IoChevronForward } from 'react-icons/io5';
import colors from '../../styles/colors';
import PageContainer from '../../components/PageContainer';
import SubButton from '../../components/SubButton';
import { Icon } from '@iconify/react';
import { typography } from '../../styles/typography';
import HeaderBar from '../../components/HeaderBar';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
   
      <HeaderBar title="마이페이지" />
      <ProfileCard>
        <ProfileRow>
          <ProfileImage>
            <Icon icon="mdi:account-circle" width={56} height={56} color={colors.main} />
          </ProfileImage>
          <ProfileInfo>
            <Nickname>김나리님</Nickname>
            <EditButton>
              <Icon icon="tabler:pencil" width={20} height={20} color={colors.black_sub} />
            </EditButton>
          </ProfileInfo>
        </ProfileRow>
        <SubButton style={{ marginTop: 24, width: '100%' }}>기록하러 가기</SubButton>
      </ProfileCard>

      <NavCard>내 기록</NavCard>
      <NavCard onClick={() => navigate('/settings/GifticonPage')}>기프티콘</NavCard>
      <SectionTitle>알림</SectionTitle>
      <SettingItem>
        <Label>시스템 알림 설정</Label>
        <ToggleSwitch defaultChecked />
      </SettingItem>
      <SettingItem>
        <Label>마케팅 정보 알림 설정</Label>
        <ToggleSwitch defaultChecked />
      </SettingItem>

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
    
  </PageContainer>
);
};

export default SettingsPage;

const SectionTitle = styled.div`
  margin: 16px 0 8px;
  ${typography.caption};
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
  ${typography.des_bold};
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

const ProfileCard = styled.div`
  width: 90%;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  padding: 24px 20px 12px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const ProfileImage = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${colors.sub};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Nickname = styled.div`
  ${typography.sub_title};
  color: ${colors.black};
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const NavCard = styled.div`
  width: 87%;
  height: 48px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 0 24px;
  margin-bottom: 12px;
  ${typography.des_bold};
  color: ${colors.black};
  display: flex;
  align-items: center;
`;
