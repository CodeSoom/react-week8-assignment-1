import styled from '@emotion/styled';

const Container = styled.div({
  padding: '10rem 0',
  textAlign: 'center',
});

const Title = styled.h2({
  marginBottom: '2rem',
  color: '#000000',
  textAlign: 'center',
  fontSize: '3.5rem',
});

const Description = styled.p({
  margin: 0,
  lineHeight: '1.5',
  color: '#000000',
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
});

export default function AboutPage() {
  return (
    <Container>
      <Title>이 서비스에 대해서...</Title>
      <Description>이 서비스는 영국에서 시작되었습니다.</Description>
      <Description>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</Description>
    </Container>
  );
}
