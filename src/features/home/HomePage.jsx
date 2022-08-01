import styled from '@emotion/styled';

const Container = styled.section({
  padding: '10rem 3rem',
});

const Title = styled.h2({
  color: '#000000',
  textAlign: 'center',
  fontSize: '3.5rem',
});

const Description = styled.p({
  marginTop: '2rem',
  color: '#000000',
  textAlign: 'center',
  fontSize: '3rem',
  fontWeight: 'bold',
});

export default function HomePage() {
  return (
    <Container>
      <Title>Eat Go에 오신 것을 환영합니다.🙌</Title>
      <Description>레스토랑을 구경해보세요.😎</Description>
    </Container>
  );
}
