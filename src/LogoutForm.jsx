import { memo } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  margin: '1em',
});

function LogoutForm({ onClick }) {
  return (
    <Container>
      <button
        type="button"
        onClick={onClick}
      >
        Log out
      </button>
    </Container>
  );
}

export default memo(LogoutForm);
