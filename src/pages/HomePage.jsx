import React from 'react';

import styled from '@emotion/styled';

import Background from '../styles/Background';

const Title = styled.h1({
  padding: 5,
  margin: 0,
  color: '#FFF',
});

export default function HomePage() {
  return (
    <Background>
      <Title>
        코드숨잇고에서 당신을 위한
      </Title>
      <Title>
        레스토랑을 찾아보세요
      </Title>
    </Background>
  );
}
