import { memo } from 'react';

import styled from '@emotion/styled';

const Button = styled.button({
  all: 'unset',
  color: '#555',
  fontSize: '1.2rem',
  cursor: 'pointer',

  '&:hover': {
    color: '#000',
  },
});

export default memo(({ onClick }) => (
  <>
    <Button
      type="button"
      onClick={onClick}
    >
      Log out
    </Button>
  </>
));
