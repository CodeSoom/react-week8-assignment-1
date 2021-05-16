import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.ul({
  backgroundColor: '#ffac81',
  margin: '0',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  height: '2rem',
});

const List = styled.ul({
  width: '100%',
  display: 'flex',
  listStyle: 'none',
});

const Item = styled.ul({
  height: '2.5em',
  backgroundColor: 'transparent',
  outline: 0,
  '& a': {
    '&:hover': {
      backgroundColor: '#242423',
      color: 'white',
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
