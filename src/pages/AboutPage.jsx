import styled from '@emotion/styled';

import React from 'react';

const Container = styled.div({
  marginTop: '2em',
  marginBottom: '2em',
  textAlign: 'center',
});

const Title = styled.h2({
  margin: '1em',
  textAlign: 'center',
});

const Description = styled.p({
  margin: '0.4em 0',
  textAlign: 'center',
});

export default function AboutPage() {
  return (
    <Container>
      <Title>Let Eat Go 에 오신 것을 환영합니다!</Title>
      <Description>이 서비스는 Codesoom에서 시작되었습니다.</Description>
      <Description>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</Description>
    </Container>
  );
}
