import React from 'react';

import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const Nav = styled.ul({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexFlow: 'row wrap',
  height: '100%',
  '& a': {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#111',
    textDecoration: 'none',
    textAlign: 'center',
    border: '1px solid #DADADA',
    '&:hover': {
      color: '#FFF',
      fontWeight: 900,
      backgroundColor: '#00D33B',
    },
    '&.active': {
      color: '#FFF',
      fontWeight: 900,
      backgroundColor: '#00D33B',
    },
  },
});

const Item = styled.li({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
});

export default function NavigatorBar() {
  return (
    <Nav>
      <NavLink to="/restaurants" activeClassName={Nav.active}>
        <Item>
          Restaurants
        </Item>
      </NavLink>
      <NavLink to="/about" activeClassName={Nav.active}>
        <Item>
          About
        </Item>
      </NavLink>
    </Nav>
  );
}
