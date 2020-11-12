import React from 'react';

import styled from '@emotion/styled';

import Container from './Container';

const NotFoundText = styled.p({
  backgroundColor: 'rgba(255,0,0,0.3)',
  backdropFilter: 'saturate(180%) blur(30px)',
  color: '#fff',
  fontSize: '5em',
  padding: '0.5em 1em',
  borderRadius: '0.5em',
});

export default function NotFoundPage() {
  return (
    <Container>
      <NotFoundText>
        404 Not Found
      </NotFoundText>
    </Container>
  );
}
