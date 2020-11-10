import React from 'react';

import { Link } from 'react-router-dom';

import Title from './styles/Title';
import NavList from './styles/NavList';
import NavItem from './styles/NavItem';


export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <NavList>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/login">Log in</Link></NavItem>
        <NavItem><Link to="/restaurants">Restaurants</Link></NavItem>
        <NavItem><Link to="/xxx">멸망의 길</Link></NavItem>
      </NavList>
    </div>
  );
}
