import React from 'react';

import styled from '@emotion/styled';

const Home = styled.div({
  paddingTop: '60px',
  width: '100%',
  top: 0,
  left: 0,
  textAlign: 'center',
});

export default function HomePage() {
  return (
    <Home>
      <h1>
        코드숨잇고에서 당신을 위한
      </h1>
      <h1>
        레스토랑을 찾아보세요
      </h1>
    </Home>
  );
}
