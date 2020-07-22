import React from 'react';

import { Link } from 'react-router-dom';

import Title from '../styles/Title';
import MenuList from '../styles/List';
import { LinkItem } from '../styles/ListItem';


export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <MenuList>
        <LinkItem><Link to="/about">About</Link></LinkItem>
        <LinkItem><Link to="/login">Log in</Link></LinkItem>
        <LinkItem><Link to="/restaurants">Restaurants</Link></LinkItem>
        <LinkItem><Link to="/xxx">멸망의 길</Link></LinkItem>
      </MenuList>
    </div>
  );
}
