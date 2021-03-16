import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Cotainer = styled.header({
  padding: '0 5%',
  '& h1': {
    fontSize: '1.5em',
    margin: 0,
    padding: '1em 0',
  },
  '& a': {
    color: '#0051FF',
    textDecoration: 'none',
    '&:hover': {
      color: '#3082F6',
    },
  },
});

export default function Header() {
  return (
    <Cotainer>
      <h1>
        <Link to="/">Codesoom Restaurant</Link>
      </h1>
    </Cotainer>
  );
}
