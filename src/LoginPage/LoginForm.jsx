import { memo } from 'react';

import styled from '@emotion/styled';

import TextField from '../components/TextField';

const Button = styled.button({
  padding: '5px 16px',
  border: '0px',
  borderRadius: '6px',
  width: '100%',
  color: '#fff',
  backgroundColor: '#555',
  fontStyle: 'bold',
  cursor: 'pointer',
  transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
  transitionProperty: 'background-color',

  '&:hover': {
    backgroundColor: '#DBDBDB',
  },
});

export default memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  return (
    <>
      <TextField
        label="E-mail"
        name="email"
        value={email}
        type="email"
        onChange={onChange}
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        type="password"
        onChange={onChange}
      />
      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </>
  );
});
