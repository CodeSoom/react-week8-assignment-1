import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { Title, Container } from '../styled';

const Menu = styled.ul({
  marginTop: '100px',
  width: '50%',
  fontSize: '1.2em',
  counterReset: 'menu',
  '& li': {
    counterIncrement: 'menu',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '1em',
    borderRadius: '1px 25px',
    marginBottom: '15px',
    backgroundColor: '#FEC7BC',
  },

  '& li:hover': {
    backgroundColor: '#CAE7E3',
    color: '#B2B2B2',
    width: '100%',
  },

});

export default function HomePage() {
  return (
    <Container>
      <Title>Home</Title>
      <Menu>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">멸망의 길</Link></li>
      </Menu>
    </Container>
  );
}
