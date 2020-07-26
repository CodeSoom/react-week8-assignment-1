import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const HomeContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: '#FFD600',
    },
  },
});


export default function HomePage() {
  return (
    <HomeContainer>
      {/* <Title>Home</Title> */}
      <List>
        <Item>
          <Link to="/">About</Link>
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
    </HomeContainer>
  );
}
