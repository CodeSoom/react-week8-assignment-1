import styled from '@emotion/styled';

const Title = styled.h2({
  fontSize: '40px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

export default function AboutPage() {
  return (
    <div>
      <Title>이 서비스에 대해서...</Title>
      <p>이 서비스는 영국에서 시작되었습니다.</p>
      <p>이 서비스를 보셨다면 주변에 있는 20명에게 추천하셔야 합니다.</p>
    </div>
  );
}
