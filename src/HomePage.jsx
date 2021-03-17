import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export default function HomePage() {
  const PageTitle = styled.h2({
    marginBottom: '1rem',
    fontSize: '2rem',
    textAlign: 'center',
  });

  const Nav = styled.ul({
    margin: '0 auto',
    width: '50%',
  });

  const NavItem = styled.li({
    '& + &': {
      marginTop: '1rem',
    },
    '& a': {
      display: 'block',
      padding: '1rem',
      fontSize: '1.2rem',
      textAlign: 'center',
      border: '1px solid #dcdcdc',
      borderRadius: '2em',
      transition: '0.2s linear',
      '&:hover': {
        background: '#a18cd1',
        color: '#fff',
      },
    },
  });

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
