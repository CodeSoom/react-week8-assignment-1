import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import PageMain from './PageMain';

const Item = styled.li({
  padding: '35px 0',
  display: 'flex',
  justifyContent: 'center',
  '& a': {
    textDecoration: 'none',
    backgroundColor: 'teal',
    color: 'white',
    width: '70%',
    padding: '5px 0',
    borderRadius: '10px',
  },
});

const List = styled.ul({
  listStyle: 'none',
  fontSize: '30px',
  textAlign: 'center',
  paddingLeft: '0px',
});

export default function HomePage() {
  return (
    <PageMain>
      <h2>Home</h2>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">Go to hell</Link></Item>
      </List>
    </PageMain>
  );
}
