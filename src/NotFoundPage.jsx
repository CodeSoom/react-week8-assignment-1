import styled from '@emotion/styled';

const ErrorContent = styled.p({
  fontSize: '1em',
  margin: '0 auto',
  color: '#d16b60',
  textAlign: 'center',
  lineHeight: '10em',
});

export default function NotFoundPage() {
  return (
    <ErrorContent>404 Not Found</ErrorContent>
  );
}
