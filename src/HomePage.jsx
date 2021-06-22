import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.div({
  '& h2': {
    fontsize: '1.5em',
    margin: 0,
    padding: '.5em 2.5em',
    color: '#311800',
  },
});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: '0 2.5em',
  listStyle: 'none',
});

const Item = styled.li({
  margin: 0,
  padding: '0 1.5em',
  fontsize: '.5em',
  '& a': {
    color: '#55462b',
    textDecoration: 'none',
    '&:hover': {
      color: '#311800',
      fontWeight: '600',
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <h2>Home</h2>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </Container>
  );
}
