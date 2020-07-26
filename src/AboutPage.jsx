import React from 'react';

import styled from '@emotion/styled';

const SubTitle = styled.h2({
  textAlign: 'center',
});

const Description = styled.p({
  textAlign: 'center',
});

function AboutPage() {
  return (
    <div>
      <SubTitle>
        이 서비스에 대해서...
      </SubTitle>
      <Description>
        이 서비스는 영국에서 시작되었습니다.
      </Description>
      <Description>
        이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.
      </Description>
    </div>
  );
}

export default React.memo(AboutPage);
