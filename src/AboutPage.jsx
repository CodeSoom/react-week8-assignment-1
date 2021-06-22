import styled from '@emotion/styled';
import Container from './Container';
import Title from './Title';

const Paragraph = styled.p({
  margin: 0,
  padding: '.5em 4em',
  color: '#311800',
});

export default function AboutPage() {
  return (
    <Container>
      <Title>이 서비스에 대해서...</Title>
      <Paragraph>이 서비스는 영국에서 시작되었습니다.</Paragraph>
      <Paragraph>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</Paragraph>
    </Container>
  );
}
