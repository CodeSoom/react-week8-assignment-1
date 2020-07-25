import styled from '@emotion/styled';

import React from 'react';

import { Link } from 'react-router-dom';

import About from './AboutPage';

const Container = styled.div({
  padding: '1em',
});

const Menus = styled.div({
  marginRight: '0.5em',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const Menu = styled.div({
  padding: '1.5em',
  margin: '0.4em',
  borderRadius: '5%',
  textAlign: 'center',
  border: '1px solid #ff6659',
  backgroundColor: '#ff6659',
  '& a': {
    textDecoration: 'none',
    '& span': {
      width: '100%',
      fontSize: '20px',
      color: '#eee',
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <About />
      <Menus>
        <Menu><Link to="/about"><span>about</span></Link></Menu>
        <Menu><Link to="/restaurants"><span>restaurants</span></Link></Menu>
        <Menu><Link to="/login"><span>log in</span></Link></Menu>
      </Menus>
    </Container>
  );
}
