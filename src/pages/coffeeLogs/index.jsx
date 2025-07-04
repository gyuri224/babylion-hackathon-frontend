import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { typography } from '../../styles/typography';
import WheelPicker from '../../components/WheelPicker';
import MenuModal from './MenuModal';
import HeaderBar from '../../components/HeaderBar';
import PageContainer from '../../components/PageContainer';
import MainButton from '../../components/MainButton';

const CoffeeLogPage = () => {
  const navigate = useNavigate();

  const years = Array.from({ length: 10 }, (_, i) => `${2016 + i}년`);
  const months = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
  const days = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);

  const [pickerValue, setPickerValue] = useState({
    year: `${new Date().getFullYear()}년`,
    month: `${new Date().getMonth() + 1}월`,
    day: `${new Date().getDate()}일`,
  });

  const [amount, setAmount] = useState('');
  const [menu, setMenu] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showMenuList, setShowMenuList] = useState(false);
  const [recentMenus, setRecentMenus] = useState([]);
  const [showAmountWheel, setShowAmountWheel] = useState(false);
  const amountOptions = Array.from({ length: 10 }, (_, i) => String(i + 1));

  useEffect(() => {
    localStorage.setItem('recentMenus', JSON.stringify(recentMenus));
  }, [recentMenus]);

  useEffect(() => {
    const saved = localStorage.getItem('recentMenus');
    if (saved) {
      setRecentMenus(JSON.parse(saved));
    }
  }, []);

  const handleDateChange = (name, value) => {
    setPickerValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullDate = `${pickerValue.year.replace('년', '')}-${pickerValue.month.replace('월', '').padStart(2, '0')}-${pickerValue.day.replace('일', '').padStart(2, '0')}`;
    const body = {
      userId: 1,
      date: fullDate,
      coffeeName: menu,
      quantity: Number(amount),
    };
    try {
      await fetch('/api/coffee/record', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setRecentMenus((prev) => {
        const updated = [menu, ...prev.filter((m) => m !== menu)];
        localStorage.setItem('recentMenus', JSON.stringify(updated.slice(0, 5)));
        return updated.slice(0, 5);
      });
      navigate('/log-complete');
    } catch (err) {
      alert('기록에 실패했습니다.');
    }
  };

  const fullDateText = `${pickerValue.year.replace('년', '')}.${pickerValue.month.replace('월', '').padStart(2, '0')}.${pickerValue.day.replace('일', '').padStart(2, '0')}`;

  const menuOptions = [
    '에스프레소', '아메리카노', '콜드브루', '헤이즐넛 아메리카노', '아인슈페너', '핸드드립',
    '카페라떼', '바닐라라떼', '플랫화이트', '카푸치노', '헤이즐넛라떼',
    '카라멜마끼아또', '연유 라떼', '아포카토', '안마심', '기타'
  ];

  const handleMenuSelect = (item) => {
    setMenu(item);
  };

  return (
    <PageContainer>
      <HeaderBar />
      <ContentWrapper>
        <Form onSubmit={handleSubmit}>
          <DateDisplay onClick={() => setShowPicker(!showPicker)}>{fullDateText}</DateDisplay>
          <WheelPicker
            value={pickerValue}
            onChange={handleDateChange}
            show={showPicker}
            setShow={setShowPicker}
            years={years}
            months={months}
            days={days}
          />
          <Input
            type="text"
            placeholder="수량"
            value={amount}
            onClick={() => setShowAmountWheel(true)}
            readOnly
            required
          />
          <WheelPicker
            value={{ amount }}
            onChange={(key, val) => setAmount(val)}
            show={showAmountWheel}
            setShow={setShowAmountWheel}
            years={[]}
            months={[]}
            days={[]}
            amountOptions={amountOptions}
            type="amount"
          />
          <Input
            type="text"
            placeholder="메뉴"
            value={menu}
            onClick={() => setShowMenuList(true)}
            readOnly
          />
          <MenuModal
            show={showMenuList}
            setShow={setShowMenuList}
            menu={menu}
            onSelect={handleMenuSelect}
            recentMenus={recentMenus}
            menuOptions={menuOptions}
          />
        </Form>
      </ContentWrapper>
      <BottomButtonWrapper>
        <MainButton type="submit" form="coffee-log-form">완료</MainButton>
      </BottomButtonWrapper>
    </PageContainer>
  );
};

export default CoffeeLogPage;

const Container = styled.div`
  padding: 20px;
  font-family: sans-serif;
`;

const Form = styled.form.attrs({ id: 'coffee-log-form' })`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

const Input = styled.input`
  width: 327px;
  height: 52px;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid ${colors.sub};
  border-radius: 8px;
  background-color: ${colors.white};
  ${typography.des};
  outline: none;
  box-sizing: border-box;
  transition: border 0.2s;
  &:focus, &:active {
    border: 2px solid ${colors.sub};
    color: ${colors.black};
  }
`;

const DateDisplay = styled.div`
  width: 327px;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid ${colors.sub};
  border-radius: 8px;
  background-color: ${colors.white};
  color: ${colors.black_sub};
  box-sizing: border-box;
  cursor: pointer;
  &:focus, &:active {
    border: 2px solid ${colors.sub};
    color: ${colors.black_sub};
  }
`;

const MenuButton = styled.button`
  padding: 8px 0;
  border-radius: 20px;
  border: 1.5px solid ${colors.black_sub};
  background-color: ${(props) => (props.selected ? colors.main : colors.white)};
  color: ${(props) => (props.selected ? colors.white : colors.black)};
  ${typography.des_bold};
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 8px;
  padding: 0 20px;
  margin-top: 10px;
  align-items: stretch;
`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 88px); // 88px = 버튼(48) + 여백(40)
  padding-bottom: 88px;
`;

const BottomButtonWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  display: flex;
  justify-content: center;
  background: transparent;
  z-index: 100;
`; 