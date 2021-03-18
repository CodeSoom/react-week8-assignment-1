import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const Container = styled.div({
  padding: '2em 3em',
  margin: 0,
});

const Content = styled.div({
  margin: '1em 0',
  '& h2': {
    color: colors.highlight,
  },
  '& h3': {
    fontSize: '1.1em',
    marginTop: '1em',
  },
  '& p': {
    fontSize: '1em',
    marginTop: '1em',
  },
});

export default function AboutPage() {
  return (
    <Container>
      <Content>
        <h2>이 서비스에 대해서...</h2>
        <p>이 서비스는 영국에서 시작되었습니다.</p>
        <p>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</p>
      </Content>
    </Container>
  );
}
