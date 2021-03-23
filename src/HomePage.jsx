import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import MenuContainer from './MenuContainer';

import Title from './Title';

const MenuItem = styled.li({
  padding: '1em 0 0 0',
  '& a': {
    marginLeft: '2em',
    color: '#FFF5BA',
    backgroundColor: '#FFABAB',
    textDecoration: 'none',
    border: 0,
    borderRadius: '50% 20% / 10% 40%',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#F3FFE3',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <MenuContainer>
        <MenuItem><Link to="/about">About</Link></MenuItem>
        <MenuItem><Link to="/login">Log in</Link></MenuItem>
        <MenuItem><Link to="/restaurants">Restaurants</Link></MenuItem>
        <MenuItem><Link to="/xxx">멸망의 길</Link></MenuItem>
      </MenuContainer>
    </div>
  );
}
