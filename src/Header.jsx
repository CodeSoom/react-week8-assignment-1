import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { colors } from './designSystem';

const Container = styled.header({
  padding: '0 5%',
  borderBottom: `1px solid ${colors.border}`,
  '& h1': {
    fontSize: '2.3em',
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
    <Container>
      <h1>
        <Link to="/">Codesoom Restaurant</Link>
      </h1>
    </Container>
  );
}
