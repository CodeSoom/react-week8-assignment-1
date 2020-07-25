import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const HeaderWrapper = styled.header({
  backgroundColor: '#EEE',
  '& h1': {
    margin: 0,
    padding: '1em 0.5em',
    fontSize: '1.5em',
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

const Header = () => (
  <HeaderWrapper>
    <h1>
      <Link to="/">EatGo</Link>
    </h1>
  </HeaderWrapper>
);


export default Header;
