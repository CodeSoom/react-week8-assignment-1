import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import homeImage from './assets/images/homeImage.png';

const Container = styled.div(() => ({
  display: 'table',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const Title = styled.h2({
  margin: '0',
  padding: 'auto',
});

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: '4em auto',
  marginTop: '2em',
});

const Item = styled.li({
  marginRight: '2.5em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
    },
  },
});

const Image = styled.img((src, alt) => ({
  src,
  alt,
  marginTop: '2em',
  width: '100%',
}));

export default function HomePage() {
  return (
    <Container>
      <Title>
        Home
      </Title>
      <List>
        <Item>
          <Link to="/about">About</Link>
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
      <Image src={homeImage} alt="오늘뭐먹지?" />
    </Container>
  );
}
