import React from 'react';
import styled from 'styled-components';
import frame364 from '../../assets/Frame 364.png';
import { typography } from '../../styles/typography';
import colors from '../../styles/colors';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import HeaderBar from '../../components/HeaderBar';
import PageContainer from '../../components/PageContainer';

const gifticons = [
  {
    id: 1,
    brand: '스타벅스',
    name: '아이스 아메리카노 T',
    expire: '2025.10.29까지',
  },
  {
    id: 2,
    brand: '스타벅스',
    name: '아이스 아메리카노 T',
    expire: '2025.10.29까지',
  },
  {
    id: 3,
    brand: '스타벅스',
    name: '아이스 아메리카노 T',
    expire: '2025.10.29까지',
  },
  {
    id: 4,
    brand: '스타벅스',
    name: '아이스 아메리카노 T',
    expire: '2025.10.29까지',
  },

  {
    id: 5,
    brand: '스타벅스',
    name: '아이스 아메리카노 T',
    expire: '2025.10.29까지',
  },
  {
    id: 6,
    brand: '스타벅스',
    name: '아이스 아메리카노 T',
    expire: '2025.10.29까지',
  }
];  


const Wrapper = styled.div`
  padding: 24px 20px 0 20px;
  background-color: #fff;
`;

const GifticonPage = () => {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Wrapper>
        <HeaderBar title="기프티콘" />
        <Grid>
          {gifticons.map((item) => (
            <Card key={item.id} onClick={() => navigate('/settings/MyGiftIcons')}>
              <ImageBox>
                <GiftImage src={frame364} alt="기프티콘" />
              </ImageBox>
              <Brand>{item.brand}</Brand>
              <ProductName>{item.name}</ProductName>
              <ExpireDate>{item.expire}</ExpireDate>
            </Card>
          ))}
        </Grid>
      </Wrapper>
    </PageContainer>
  );
};

export default GifticonPage;

const BackButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.div`
  ${typography.sub_title};
  color: ${colors.black};
  width: 100%;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px 12px;
  padding: 24px 16px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  padding: 18px 8px 12px 8px;
  cursor: pointer;
`;

const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GiftImage = styled.img`
  width: 128%;
  height: 128%;
  object-fit: contain;
`;

const Brand = styled.div`
  ${typography.caption};
  color: ${colors.black_sub};
  text-align: left;
  margin-bottom: 2px;
`;

const ProductName = styled.div`
  ${typography.des_bold};
  color: ${colors.black};
  text-align: center;
  margin-bottom: 2px;
`;

const ExpireDate = styled.div`
  ${typography.caption};
  color: ${colors.black_sub};
  text-align: center;
  margin-top: 2px;
`;
