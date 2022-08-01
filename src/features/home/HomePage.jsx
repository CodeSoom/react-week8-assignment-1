import styled from '@emotion/styled';

import NavBar from '../../components/home/NavBar';

const Container = styled.section({
  padding: '3rem',
});

const Title = styled.h2({
  margin: '0 0 3rem 0',
  color: '#495C83',
});

export default function HomePage() {
  return (
    <Container>
      <Title>Home</Title>

      <NavBar />
    </Container>
  );
}
