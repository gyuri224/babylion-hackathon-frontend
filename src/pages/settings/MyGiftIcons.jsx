import React from 'react';
import styled from 'styled-components';
import { typography } from '../../styles/typography';
import colors from '../../styles/colors';
import frame364 from '../../assets/Frame 364.png'; 
import barcode from '../../assets/barcode.png';
import { Icon } from '@iconify/react';
import HeaderBar from '../../components/HeaderBar';
import PageContainer from '../../components/PageContainer';

const Wrapper = styled.div`
  padding: 24px 20px;
  background-color: #fff;
`;

const GifticonDetail = () => {
  const noticeText = `
- 상기 이미지는 연출된 것으로 실제와 다를 수 있습니다.
- 본 상품은 매장 재고 상황에 따라 동일 상품으로 교환이 불가능할 수 있습니다.
- 동일 상품 교환이 불가한 경우 다른 상품으로 교환이 가능합니다. (차액 발생 시 차액 지불) 만약 다른 상품으로 교환을 원치 않을 경우 매장에서 환불 요청 접수가 가능하며, 환불 요청 접수 시 카카오에서 쿠폰 수신자에게 환불 진행을 위한 알림톡을 발송합니다.
- 본 상품은 스타벅스 어플 홈 > Coupon > 모바일 상품권에 추가해 편리하게 사용하실 수 있습니다.
- 상품 결제 시 본 상품 권면에 기재된 금액의 60% 이상을 결제한 후 남은 잔액은 회원의 계정에 등록된 스타벅스 카드나 보유하고 있는 무기명 스타벅스 카드에 충전됩니다. 스타벅스 카드를 등록 또는 보유하고 있지 않은 고객의 경우, 무기명 스타벅스 카드를 발급받아 잔액을 충전할 수 있습니다. (일부 매장 잔액 적립 불가)
- 스타벅스 앱의 사이렌 오더를 통해서도 주문 및 결제가 가능합니다. (일부 MD제외)
- 미군부대 매장, 워터파크 입점 매장 등 일부 매장에서는 사용이 불가합니다.
- 해당 쿠폰과 스타벅스 카드의 복합결제 거래는 스타벅스 카드의 고유 혜택인 Free Extra 및 별 적립은 적용 대상이 아닌 점 이용에 참고하시기 바랍니다.
- 정식 판매처 외의 장소나 경로를 통하여 구매하거나, 기타의 방법으로 보유하신 쿠폰은 정상적인 사용 (환불, 재전송 등 포함)이 금지되거나 제한될 수 있으니 주의하시기 바랍니다.
- 해당 쿠폰을 무단으로 가공하는 등의 행위는 관계 법령에 위반될 수 있습니다.
- 본 상품페이지에 포함된 콘텐츠(상표, 썸네일, 이미지)는 (주)에스씨케이컴퍼니의 자산입니다. 허가없이 무단 복제 및 상업적 용도로 게재 및 재배포, 판매 시 반드시 법적 책임을 묻겠습니다.
`;

const infoRows = [
  { label: '교환처', value: '스타벅스' },
  { label: '유효기간', value: '2025.10.29' },
  { label: '주문번호', value: '1078040189' },
];

  return (
    <PageContainer>
      <Wrapper>
        <HeaderBar title="기프티콘" />
        <ImageBox>
          <GiftImage src={frame364} alt="기프티콘" />
        </ImageBox>
        <Brand>스타벅스</Brand>
        <ProductName>아이스 아메리카노 T</ProductName>
        <BarcodeBox>
          <BarcodeImg src={barcode} alt="바코드" />
        </BarcodeBox>
        <InfoTable>
          {infoRows.map((row, idx) => (
            <InfoRow key={row.label} isLast={idx === infoRows.length - 1}>
              <InfoLabel>{row.label}</InfoLabel>
              <InfoValue>{row.value}</InfoValue>
            </InfoRow>
          ))}
        </InfoTable>
        <Notice>
          <b>이용안내</b>
          {noticeText}
        </Notice>
      </Wrapper>
    </PageContainer>
  );
};

export default GifticonDetail;

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background: #fff;
  padding: 0 0 32px 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #eee;
  position: relative;
`;

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

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 32px 0 16px 0;
`;

const GiftImage = styled.img`
  width: 128px;
  height: 128px;
  object-fit: contain;
`;

const Brand = styled.div`
  ${typography.caption};
  color: ${colors.black_sub};
  text-align: center;
  margin-bottom: 0px;
`;

const ProductName = styled.div`
  ${typography.des_bold};
  color: ${colors.black};
  text-align: center;
  margin-bottom: 16px;
`;

const BarcodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

const BarcodeImg = styled.img`
  width: 244.31px;
  height: 98px;
  object-fit: contain;
  margin-bottom: 4px;
`;

const BarcodeNumber = styled.div`
  ${typography.caption};
  color: ${colors.black};
  letter-spacing: 2px;
`;

const InfoTable = styled.div`
  width: 100%;
  margin: 16px 0 24px 0;
  width:90%;
  margin: 16px auto 24px auto;
  background: #fff;
  overflow: hidden;
  border-top: 1px solid  ${colors.black_sub};
  border-bottom: 1px solid ${colors.black_sub};
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: ${({ isLast }) => (isLast ? 'none' : `0.3px solid  ${colors.black_sub}`)};
`;

const InfoLabel = styled.div`
  ${typography.des};
  color: ${colors.black_sub};
  padding-left: 36px;
`;

const InfoValue = styled.div`
  ${typography.des};
  color: ${colors.black_sub};
  padding-right: 36px;
`;

const Notice = styled.div`
  ${typography.caption};
  color: ${colors.black};
  border-radius: 8px;
  padding: 16px;
  margin: 0 16px;
  font-size: 11px;
  white-space: pre-line;
  & > b {
    display: block;
    margin-bottom: 0px;
  }
`;
