import styled from '@emotion/styled';

const ErrorParagraph = styled.p({
  fontSize: '1em',
  margin: '0 auto',
  color: '#d16b60',
  textAlign: 'center',
  lineHeight: '10em',
});

export default function NotFoundPage() {
  return (
    <ErrorParagraph>404 Not Found</ErrorParagraph>
  );
}
