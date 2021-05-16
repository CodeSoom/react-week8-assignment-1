import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  flexDirection: 'column',
});

const Item = styled.li({
  margin: '2vh',
  marginRight: '1em',
  '& a': {
    color: 'rgb(212, 212, 212)',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: 'rgba(150, 150, 150)',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <List>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <Link to="/login">Log in</Link>
        </Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </div>
  );
}
