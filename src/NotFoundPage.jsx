import React from 'react';

import styled from '@emotion/styled';

const Title = styled.p({
  margin: '30px 10px',
  padding: '10px 20px',
  color: '#F9FDFC',
  textAlign: 'center',
  fontSize: '80px',
  fontFamily: '"Tillana", cursive',
  fontWeight: '600',
});

export default function NotFoundPage() {
  return (
    <Title>404 Not Found</Title>
  );
}
