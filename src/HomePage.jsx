import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import Item from './style/Item';
import List from './style/List';
import Title from './style/Title';

const HomePageBackground = styled.div({
  position: 'relative',
  height: '50vh',
  background: 'URL("../assets/foodImage.png") center/cover',
  zIndex: '1',
  '&:after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: '-1',
  },
});

export default function HomePage() {
  return (
    <HomePageBackground>
      <Title>Home</Title>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </HomePageBackground>
  );
}
