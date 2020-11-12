import React from 'react';

import { Link } from 'react-router-dom';

import HomePageBackground from './styles/HomePageBackground';

import Title from './styles/Title';
import List from './styles/List';
import Item from './styles/Item';

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
