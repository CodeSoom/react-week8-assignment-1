import React from 'react';

import styled from '@emotion/styled';

const NotFound = styled.p({
  marginTop: '0',
  fontSize: '95px',
  textAlign: 'center',
  color: 'red',
  lineHeight: '170px',
});

export default function NotFoundPage() {
  return (
    <NotFound>404 Not Found</NotFound>
  );
}
