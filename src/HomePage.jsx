import React from 'react';

import { Link } from 'react-router-dom';

import Nav from './Nav';
import NavItem from './NavItem';
import PageTitle from './PageTitle';

export default function HomePage() {
  return (
    <div>
      <PageTitle>Home</PageTitle>
      <Nav>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/login">Log in</Link></NavItem>
        <NavItem><Link to="/restaurants">Restaurants</Link></NavItem>
        <NavItem><Link to="/xxx">멸망의 길</Link></NavItem>
      </Nav>
    </div>
  );
}
