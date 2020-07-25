import React from 'react';

import { Link } from 'react-router-dom';

import MenuList from '../components/MenuList';
import MenuItem from '../components/MenuItem';
import PageWrapper from '../components/PageWrapper';

export default function HomePage() {
  return (
    <PageWrapper>
      <h2>Home</h2>
      <MenuList>
        <MenuItem><Link to="/about">About</Link></MenuItem>
        <MenuItem><Link to="/login">Log in</Link></MenuItem>
        <MenuItem><Link to="/restaurants">Restaurants</Link></MenuItem>
        <MenuItem><Link to="/xxx">멸망의 길</Link></MenuItem>
      </MenuList>
    </PageWrapper>
  );
}
