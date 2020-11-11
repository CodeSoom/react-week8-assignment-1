import React from 'react';

import { Link } from 'react-router-dom';

import HomePageBackground from './style/HomePageBackground';

import Title from './style/Title';
import List from './style/List';
import Item from './style/Item';

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
