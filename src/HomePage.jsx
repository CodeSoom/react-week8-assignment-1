import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.div({
  padding: '1em .5em',
});

const Title = styled.h2({
  margin: 0,
  padding: '.4em 0',
  fontSize: '2em',
});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      color: 'gray',
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <Title>Home</Title>
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
    </Container>
  );
}
