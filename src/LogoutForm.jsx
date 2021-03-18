import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const Button = styled.button({
  fontSize: '1em',
  margin: '1em 0',
  padding: '.6em 2em',
  border: '1px solid',
  borderColor: colors.highlight,
  borderRadius: '15px',
  background: colors.highlight,
  color: colors.white,
  textDecoration: 'none',
  cursor: 'pointer',
});


function LogoutForm({ onClick }) {
  return (
    <>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </>
  );
}

export default React.memo(LogoutForm);
