import styled from '@emotion/styled';

const Container = styled.div({
  marginTop: '20px',
});

export default function NotFoundPage() {
  return (
    <Container>
      <img src="/src/assets/tinsanity-404-page.gif" alt="404" />
    </Container>
  );
}
