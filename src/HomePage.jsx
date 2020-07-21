import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const PageHeader = styled.h2({
  width: '70%',
  margin: '20px auto',
  textAlign: 'left',
  color: '#364f6b',
  fontSize: '2em',
});

const MenuList = styled.ul({
  listStyle: 'none',
  padding: '0',
  display: 'flex',
  flexFlow: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '70vh',
});

const MenuItem = styled.li({
  width: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1 1',
  borderBottom: '1px #364f6b solid',
  '&:first-of-type': {
    borderTop: '1px #364f6b solid',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#f5f5f5',
  },
  '& a': {
    fontSize: '1.5em',
    color: '#364f6b',
    '&:link': {
      textDecoration: 'none',
    },
    '&:hover': {
      fontWeight: 'bold',
      color: '#3fc1c9',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <PageHeader>Home</PageHeader>
      <MenuList>
        <MenuItem><Link to="/about">About</Link></MenuItem>
        <MenuItem><Link to="/login">Log in</Link></MenuItem>
        <MenuItem><Link to="/restaurants">Restaurants</Link></MenuItem>
        <MenuItem><Link to="/xxx">멸망의 길</Link></MenuItem>
      </MenuList>
    </div>
  );
}
