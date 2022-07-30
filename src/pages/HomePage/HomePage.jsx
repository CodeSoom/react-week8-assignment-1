import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1rem',
  '& a': {
    textDecoration: 'none',
    color: '#333333',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
    },
  },
});

export default function HomePage() {
  return (
    <>
      <h2>Home</h2>
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
    </>
  );
}
