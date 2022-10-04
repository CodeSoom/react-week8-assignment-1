import styled from '@emotion/styled';

import BacgroundContainer from './styles/BacgroundContainer';
import MakeCenter from './styles/MakeCenter';

const backgroundUrl = 'https://images.unsplash.com/photo-1542407931-2fe6d5b417d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

const BannerTitle = styled.h2({
  display: 'block',
  color: '#FFF',
  fontWeight: 'bold',
  lineHeight: 1.2,

  '& span': {
    display: 'block',
    color: 'rgb(255, 255, 255)',

    '&:first-of-type': {
      fontSize: '1.5em',
    },

    '&:not(:first-of-type)': {
      marginTop: '.2em',
      maxWidth: '9em',
      fontSize: '3em',
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
  },

  '& small': {
    display: 'block',
    marginTop: '1.3em',
    maxWidth: '14em',
    color: 'rgb(193, 193, 193)',
    fontSize: '1em',
    lineHeight: 1.5,
  },
});

export default function AboutPage() {
  return (
    <BacgroundContainer
      url={backgroundUrl}
      position={-15}
    >
      <MakeCenter>
        <BannerTitle>
          <span>이 서비스에 대해서...</span>
          <span>이 서비스는 영국에서 시작되었습니다.</span>
          <small>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</small>
        </BannerTitle>
      </MakeCenter>
    </BacgroundContainer>
  );
}
