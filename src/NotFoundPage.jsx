import styled from '@emotion/styled';

import colors from './style/colors';

const Error = styled.p({
  margin: '8em auto',
  color: `${colors.text_secondary}`,
  fontSize: '.8em',
  textAlign: 'center',
  lineHeight: '10em',
});

export default function NotFoundPage() {
  return (
    <Error>404 Not Found</Error>
  );
}
