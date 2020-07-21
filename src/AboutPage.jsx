import React from 'react';

import styled from '@emotion/styled';

import PageWrapper from './PageWrapper';

const ContentWrapper = styled.div({
  borderStyle: 'solid none',
  borderWidth: '1px',
  borderColor: '#364f6b',
  padding: '20px 20px',
  margin: '30px auto',
  backgroundColor: '#f5f5f5',
  fontSize: '1.2em',
});

export default function AboutPage() {
  return (
    <PageWrapper>
      <h2>이 서비스에 대해서...</h2>
      <ContentWrapper>
        <p>이 서비스는 영국에서 시작되었습니다.</p>
        <p>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</p>
      </ContentWrapper>
    </PageWrapper>
  );
}
