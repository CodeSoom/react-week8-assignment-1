import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  margin: '30px 10px',
  padding: '10px 20px',
  borderBottom: '2px solid rgba(249, 253, 252, 0.5)',
  color: '#F9FDFC',
  fontSize: '35px',
});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  marginTop: '50px',
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  margin: '0 20px',
  padding: '10px',
  width: '20vw',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  boxShadow: '0px 0px 5px white',
  borderRadius: '5px',
  textAlign: 'center',
  fontSize: '22px',
  '& a': {
    color: '#F9FDFC',
    textDecoration: 'none',
    fontWeight: '600',
    '&:hover': {
      color: '#5B4230',
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
        <Item><Link to="/xxx">Good bye</Link></Item>
      </List>
    </div>
  );
}
