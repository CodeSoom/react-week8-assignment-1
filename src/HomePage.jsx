import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Title = styled.h2({
  fontSize: '2em',
  margin: 0,
  padding: '.4em',
});

const List = styled.ul({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
});

const Item = styled.li({
  paddingRight: '.8em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </div>
  );
}
