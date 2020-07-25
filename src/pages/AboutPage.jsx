import React from 'react';

import PageWrapper from '../components/PageWrapper';
import ContentWrapper from '../components/ContentWrapper';

import aboutEatgo from '../assets/documents/about-eatgo';

export default function AboutPage() {
  return (
    <PageWrapper>
      <h2>이 서비스에 대해서...</h2>
      <ContentWrapper>
        <p>{aboutEatgo.body}</p>
      </ContentWrapper>
    </PageWrapper>
  );
}
