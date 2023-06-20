import styled from '@emotion/styled';

const Container = styled.div({
  margin: '16px',
});

const Title = styled.h2({
  fontFamily: 'Noto Sans KR',
  fontSize: '24px',
  lineHeight: '1.8',
});

const Text = styled.p({
  fontSize: '16px',
  lineHeight: '1.8',
});

export default function AboutPage() {
  return (
    <Container>
      <Title>이 서비스에 대해서...</Title>
      <Text>이 서비스는 영국에서 시작되었습니다.</Text>
      <Text>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</Text>
    </Container>
  );
}
