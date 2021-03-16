import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const PageMain = styled.div({
  height: '550px',
  '& h2': {
    fontSize: '30px',
    textAlign: 'center',
  },
});

const Item = styled.li({
  padding: '35px 0',
  display: 'flex',
  justifyContent: 'center',
  '& a': {
    display: 'block',
    textDecoration: 'none',
    position: 'inline-block',
    width: '70%',
    backgroundColor: 'teal',
    color: 'white',
    borderRadius: '10px',
    padding: '5px 0',
  },
});

const List = styled.ul({
  listStyle: 'none',
  paddingLeft: '0px',
  fontSize: '30px',
  textAlign: 'center',
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
