import styled from '@emotion/styled';

import BacgroundContainer from './styles/BacgroundContainer';
import MakeCenter from './styles/MakeCenter';

const backgroundUrl = 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';

const BannerTitle = styled.h2({
  display: 'block',
  color: '#FFF',
  fontWeight: 'bold',
  lineHeight: 1.2,

  '& small': {
    display: 'block',
    marginBottom: '0.5em',
    color: '#0E4CDC',
    fontSize: '1.5em',
  },

  '& span': {
    display: 'block',
    fontSize: '3em',
  },
});

const Description = styled.div({
  marginTop: '0.5em',
  maxWidth: '21em',
  color: '#FFF',
  fontSize: '1.2em',
  lineHeight: 1.4,
});

export default function HomePage() {
  return (
    <BacgroundContainer
      url={backgroundUrl}
      position={-50}
    >
      <MakeCenter>
        <BannerTitle>
          <small>EatGo</small>
          <span>코드숨에서 알려주는</span>
          <span>맛집의 모든 것</span>
        </BannerTitle>
        <Description>
          지역, 종류 별로 맛집을 알려드립니다
        </Description>
      </MakeCenter>
    </BacgroundContainer>
  );
}
