import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import MenuContainer from './MenuContainer';

import MenuItem from './MenuItem';

const Title = styled.h2({
  fontSize: '2em',
  margin: 0,
  padding: '.2em',
  color: '#FFABAB',
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
