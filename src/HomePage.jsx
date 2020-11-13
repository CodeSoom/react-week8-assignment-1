import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Headline = styled.div({
  margin: '0 auto',
  width: '98%',
  height: '100vh',
  background: 'linear-gradient(rgba(255, 187, 0, 0.25), rgba(255, 187, 0, 0.25)), url(https://images.unsplash.com/photo-1503221043305-f7498f8b7888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1635&q=80)',
});

export default function HomePage() {
  return (
    <div>
      <Headline>
        <h2>Home</h2>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Log in</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/xxx">멸망의 길</Link></li>
        </ul>
      </Headline>
    </div>
  );
}
