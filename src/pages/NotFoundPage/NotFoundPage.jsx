import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoo } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div({
  padding: '3rem 0',
  fontFamily: 'Fredoka One',
  fontSize: '3rem',
  color: '#5C5C5C',
  textAlign: 'center',
  lineHeight: '1.6',
});

export default function NotFoundPage() {
  return (
    <Container>
      <FontAwesomeIcon icon={faPoo} />
      <p>404 Not Found</p>
    </Container>
  );
}
