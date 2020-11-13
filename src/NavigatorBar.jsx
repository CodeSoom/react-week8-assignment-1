import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const List = styled.ul({
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
    border: '1px solid #aaaaaa',
    '&:hover': {
      color: '#555',
      fontWeight: 600,
      textDecoration: 'underline',
    },
  },
});

const Item = styled.li({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function NavigatorBar() {
  return (
    <List>
      <Link to="/restaurants">
        <Item>Restaurants</Item>
      </Link>
      <Link to="/about">
        <Item>About</Item>
      </Link>
    </List>
  );
}
