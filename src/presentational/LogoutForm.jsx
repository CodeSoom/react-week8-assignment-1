import React from 'react';

import styled from '@emotion/styled';

const Button = styled.button({
  display: 'block',
  width: '30%',
  padding: '1em',
  marginTop: '1em',
  backgroundColor: '#FF91AC',
  border: '0px solid',
  color: '#FFFFFF',
  borderRadius: ' 10px 1px ',
});

export default function LogoutForm({ onClick }) {
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
