import React from 'react';

import styled from '@emotion/styled';

import PageMain from './PageMain';

const Paragraph = styled.div({
  fontSize: '18px',
  textAlign: 'center',
  lineHeight: '45px',
  width: '270px',
  height: '400px',
  borderTop: '4px solid teal',
  borderBottom: '4px solid teal',
  margin: '40px 0 0 27px',
});

export default function AboutPage() {
  return (
    <PageMain>
      <h2>이 서비스에 대해서...</h2>
      <Paragraph>
        <p>
          이 서비스는 영국에서 시작되었습니다.
          <br />
          이 서비스를 보셨다면
          <br />
          주변에 있는 20명에게 추천하셔야 합니다.
          <br />
          만약 1주일안에 추천하지 않으면
          <br />
          아무일도 일어나지 않습니다.
          <br />
          추천하기 싫으시면
          <br />
          그냥 않하시면 됩니다.
          <br />
          죄송합니다..
        </p>
      </Paragraph>
    </PageMain>
  );
}
