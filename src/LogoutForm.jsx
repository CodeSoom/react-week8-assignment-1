import React from 'react';

import styled from '@emotion/styled';

const Button = styled.button({
  margin: '0 auto',
  padding: '10px 30px',
  display: 'block',
  border: '2px solid #3fc1c9',
  borderRadius: '15px',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  fontSize: '1em',
  outline: 'none',
  '&:hover': {
    border: '2px solid #fc5185',
    cursor: 'pointer',
  },
});

export default function LogoutForm({ onClick }) {
  return (
    <div>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </div>
  );
}
