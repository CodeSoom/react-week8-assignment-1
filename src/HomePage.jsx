import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  fontsize: '1.5em',
});

const Container = styled.div({
  padding: '.3em .6em',
});

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
  margin: '0',
  padding: '0',
});

const Item = styled.li({
  marginRight: '.3em',
  padding: '.6em',
  '& a': {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: '#2ecc71',
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
