import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Container from './style/Container';
import Title from './style/Title';

const List = styled.ul({
  display: 'flex',
  padding: '0 2.5em',
});

const Item = styled.li({
  padding: '0 1.5em',
  fontsize: '.5em',
  '& a': {
    color: '#55462b',
    '&:hover': {
      color: '#311800',
      fontWeight: '600',
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <Title>Home</Title>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </Container>
  );
}
