import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import { PageBody, PageTop } from './style/layout';
import green from '../fixtures/color';

const Nav = styled.ul({
  margin: '0 auto',
  width: '50%',
});

const NavItem = styled.li({
  '& + &': {
    marginTop: '1rem',
  },
  '& a': {
    fontSize: '1.2rem',
    display: 'block',
    padding: '1rem',
    textAlign: 'center',
    border: '1px solid #dcdcdc',
    borderRadius: '2em',
    transition: '0.2s linear',
    '&:hover': {
      background: `${green}`,
      color: '#fff',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <PageTop>
        <h2>Home</h2>
      </PageTop>
      <PageBody>
        <Nav>
          <NavItem><Link to="/about">About</Link></NavItem>
          <NavItem><Link to="/login">Log in</Link></NavItem>
          <NavItem><Link to="/restaurants">Restaurants</Link></NavItem>
          <NavItem><Link to="/xxx">멸망의 길</Link></NavItem>
        </Nav>
      </PageBody>
    </div>
  );
}
