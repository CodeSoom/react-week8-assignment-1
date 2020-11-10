import React from 'react';

import styled from '@emotion/styled';

export default function AboutPage() {
  const Container = styled.div({
    width: '100%',
    height: '90vh',
    backgroundColor: 'rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: " 'Playfair Display', serif",
  });

  const AboutBox = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 5em',
    backgroundColor: 'rgba(90, 52, 35, 0.7)',
    backdropFilter: 'saturate(180%) blur(5px)',
    borderRadius: '1em',
    border: '1px solid #999',
    width: '40%',
    height: '50%',
    fontFamily: "'Noto Serif KR', serif",
    color: '#fff',
    '& h2': {
      fontSize: '2em',
      marginTop: '0',
    },
    '& p': {
      margin: '0.2em',
    },
  });

  return (
    <Container>
      <AboutBox>
        <h2>이 서비스에 대해서...</h2>
        <p>이 서비스는 영국에서 시작되었습니다.</p>
        <p>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</p>
      </AboutBox>
    </Container>
  );
}
