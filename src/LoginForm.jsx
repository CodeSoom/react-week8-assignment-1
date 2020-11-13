import React from 'react';

import styled from '@emotion/styled';

const Form = styled.article({
  textAlign: 'center',
  padding: '1em',
  '& div': {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    '& label': {
      display: 'none',
    },
    '& input': {
      width: '320px',
      height: '32px',
      borderRadius: 0,
      boxShadow: '0 2px 6px 0 rgba(61,80,81,.08)',
      border: 'solid 1px #dadada',
    },
  },
  '& button': {
    width: '330px',
    height: '40px',
    border: 'solid 1px rgb(255 255 255)',
    boxShadow: '0 2px 6px 0 rgba(61,80,81,.08)',
    borderRadius: 0,
    backgroundColor: '#00dc62',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#00ab73',
    },
  },
});


const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Form>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </Form>
  );
});

export default LoginForm;
