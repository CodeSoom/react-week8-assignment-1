import React from 'react';

import styled from '@emotion/styled';

import Container from './styles/Container';

import { colors } from './designSystem';

const Title = styled.h3({
  fontSize: '1.5em',
  color: colors.highlight,
});

export default function NotFoundPage() {
  return (
    <Container>
      <Title>404 Not Found</Title>
    </Container>
  );
}
