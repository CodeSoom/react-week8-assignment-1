import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Container from './Container';

const PageTitle = styled.h2({
  margin: '0',
  color: '#fff',
  fontWeight: '400',
  fontSize: '4vw',
});

const List = styled.ul({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  fontSize: '2.5em',
  '& li': {
    margin: '0 0.5em',
    width: '7em',
    height: '2.5em',
    lineHeight: '2.5em',
    textAlign: 'center',
    backgroundColor: 'rgba(41, 27, 27, 0.7)',
    borderRadius: '0.7em',
    border: '3px solid #fff',
    '&: hover': {
      backgroundColor: 'rgba(144, 81, 44, 0.9)',
      transform: 'scale(1.05)',
    },
    '&: active': {
      backgroundColor: 'rgba(130, 86, 86, 0.9)',
      transform: 'scale(0.99)',
    },
  },
  '& a': {
    color: '#fff',
    textDecoration: 'none',
  },

});

export default function HomePage() {
  return (
    <Container>
      <PageTitle>Home</PageTitle>
      <List>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">멸망의 길</Link></li>
      </List>
    </Container>
  );
}
