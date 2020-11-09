import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  margin: 0,
  padding: '.4em 0',
  fontSize: '1.8em',
});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#111',
    textDecoration: 'none',
    '&:hover': {
      color: '#555',
      fontWeight: 600,
      textDecoration: 'underline',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </div>
  );
}
