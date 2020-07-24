import React from 'react';

import styled from '@emotion/styled';

import Background from '../styles/Background';

const Title = styled.h1({
  padding: 5,
  margin: 0,
  color: '#FFF',
});

export default function NotFoundPage() {
  return (
    <Background>
      <Title>404 Not Found</Title>
    </Background>
  );
}
