import React from 'react';

import styled from '@emotion/styled';

const HomeContainer = styled.div({
  textAlign: 'center',
  padding: '1em',
});

export default function HomePage() {
  return (
    <HomeContainer>
      <h2>레스토랑 예약 서비스</h2>
      <p>이 서비스를 통해 레스토랑을 쉽게 예약할 수 있습니다.</p>
    </HomeContainer>
  );
}
