import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '75vh',
  textAlign: 'center',
});

const NotFoundTitle = styled.h1({
  borderRight: '1px solid rgba(0, 0, 0,.3)',
  marginRight: '20px',
  padding: '10px 23px 10px 0',
  fontSize: '24px',
  fontWeight: 'bold',
});

const NotFoundDescription = styled.span({
  fontSize: '14px',
});

export default function NotFoundPage() {
  return (
    <Container>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundDescription>This page could not be found.</NotFoundDescription>
    </Container>
  );
}
