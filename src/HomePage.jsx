import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Container = styled.div({
  margin: '.5rem 1rem',
});

const List = styled.ul({
  display: 'flex',
  padding: 0,
});

const ListItem = styled.li({
  listStyle: 'none',
  marginRight: 16,
  '& a': {
    color: 'black',
    '&:hover': {
      color: 'blueviolet',
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <h2>Home</h2>
      <List>
        <ListItem>
          <Link to="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">Log in</Link>
        </ListItem>
        <ListItem>
          <Link to="/restaurants">Restaurants</Link>
        </ListItem>
        <ListItem>
          <Link to="/xxx">멸망의 길</Link>
        </ListItem>
      </List>
    </Container>
  );
}
