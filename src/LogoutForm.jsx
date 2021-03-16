import React from 'react';

import styled from '@emotion/styled';

const Button = styled.button({
  width: '70%',
  height: '2.5rem',
  borderRadius: '1.2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  border: '0.2rem solid #f48c06',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
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
