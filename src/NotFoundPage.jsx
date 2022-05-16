import styled from '@emotion/styled';

const Paragraph = styled.p({
  fontSize: '1.5em',
  color: 'red',
});

export default function NotFoundPage() {
  return (
    <Paragraph>404 Not Found</Paragraph>
  );
}
