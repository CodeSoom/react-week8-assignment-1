import React from 'react';

import styled from '@emotion/styled';

const NotFound = styled.p({
  fontSize: '95px',
  textAlign: 'center',
  lineHeight: '170px',
  color: 'red',
  marginTop: '0',
});

export default function NotFoundPage() {
  return (
    <NotFound>404 Not Found</NotFound>
  );
}
