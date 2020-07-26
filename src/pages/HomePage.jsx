import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  fontSize: '1.8em',
  margin: 0,
  padding: '0.5em',
});
const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});
const Item = styled.li({
  fontSize: '1.1em',
  marginRight: '1em',
  padding: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});


export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <List>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <Link to="/login">Log in</Link>
        </Item>
        <Item>
          <Link to="/restaurants">Restaurants</Link>
        </Item>
        <Item>
          <Link to="/xxx">멸망의 길</Link>
        </Item>
      </List>
    </div>
  );
}
