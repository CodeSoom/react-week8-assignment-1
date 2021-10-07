import { memo } from 'react';

import styled from '@emotion/styled';

const Button = styled.button({
  marginBottom: '1em',
  border: 'none',
  borderRadius: '.3em',
  padding: '.3em',
  width: 'fit-content',
  backgroundColor: '#EEE',
  cursor: 'pointer',
  '&:hover': {
    color: '#2ecc71',
  },
});

const LogoutForm = memo(({ onClick }) => (
  <>
    <Button
      type="button"
      onClick={onClick}
    >
      Log out
    </Button>
  </>
));

export default LogoutForm;
