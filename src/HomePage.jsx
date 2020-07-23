import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const StyledHomePage = styled.div({
  '& ul': {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    li: {
      minWidth: '80px',
      height: '40px',
      marginBottom: '5px',
      borderRadius: '10px',
      cursor: 'pointer',
      backgroundColor: '#f1c40f',
      a: {
        textDecoration: 'none',
        display: 'inline-block',
        color: '#fff',
        lineHeight: '20px',
        padding: '10px',
      },
      '&:hover': {
        backgroundColor: 'pink',
        color: '#fff',
      },
    },
  },
  '& h2, & ul': {
    textAlign: 'center',
  },
});

export default function HomePage() {
  return (
    <StyledHomePage>
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">멸망의 길</Link></li>
      </ul>
    </StyledHomePage>
  );
}
