import React from 'react';

import styled from '@emotion/styled';

const Title = styled.h2({
  fontSize: '35px',
  margin: '30px 10px',
  padding: '10px 20px',
  borderBottom: '2px solid rgba(249, 253, 252, 0.5)',
  color: '#F9FDFC',
});

const Text = styled.p({
  fontSize: '40px',
  color: 'rgba(91, 66, 48, 0.8)',
  margin: '10px 20px',
  padding: '10px',
  fontFamily: '"Nanum Pen Script", cursive',
})

const TextContainer = styled.div({
  margin: '0 20px',
  padding: '10px',
  backgroundColor: 'rgba(230, 218, 212, 0.6)',
  boxShadow: '0px 0px 5px white',
  borderRadius: '5px',
})

export default function AboutPage() {
  return (
    <div>
      <Title>About</Title>
      <TextContainer>
        <Text>우리 레스토랑은 폐업했습니다</Text>
        <Text>배고프시죠?</Text>
        <Text>다른 가게라도 추천해드릴게요!</Text>
      </TextContainer>
    </div>
  );
}
