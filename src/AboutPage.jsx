import React from 'react';

import styled from '@emotion/styled';

import PageWrapper from './PageWrapper';
import ContentWrapper from './ContentWrapper';

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
