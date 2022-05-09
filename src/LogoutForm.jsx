import { memo } from 'react';

import styled from '@emotion/styled';

import Button from './Button';

const Container = styled.div({
  margin: '1em',
});

function LogoutForm({ onClick }) {
  return (
    <Container>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </Container>
  );
}

export default memo(LogoutForm);
