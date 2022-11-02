import styled from '@emotion/styled';
import ContentsWrap from './component/ContentsWrap';
import Title from './component/Title';

export default function AboutPage() {
  return (
    <ContentsWrap>
      <Title>이 서비스에 대해서...</Title>
      <TextWrap>
        <p>이 서비스는 영국에서 시작되었습니다.</p>
        <p>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</p>
      </TextWrap>
    </ContentsWrap>
  );
}

const TextWrap = styled.div`
  padding-top: 32px;
  line-height: 18px;
`;
