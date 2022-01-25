import styled from '@emotion/styled';

import Container from './styles/Container';

const Box = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& h2': {
    marginBottom: '24px',
    fontWeight: '700',
    fontSize: '36px',
  },
  '& p': {
    lineHeight: '24px',
  },
});

export default function AboutPage() {
  return (
    <Container>
      <Box>
        <h2>이 서비스에 대해서... 😈</h2>
        <p>이 서비스는 영국에서 시작되었습니다.</p>
        <p>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</p>
      </Box>
    </Container>
  );
}
