import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  margin: 0,
  padding: '.4em 0',
});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& .link': {
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

const links = [
  {
    id: 1,
    path: '/about',
    name: 'About',
  },
  {
    id: 2,
    path: '/login',
    name: 'Log in',
  },
  {
    id: 3,
    path: '/restaurants',
    name: 'Restaurants',
  },
  {
    id: 4,
    path: '/xxx',
    name: '멸망의 길',
  },
];

export default function HomePage() {
  return (
    <div>
      <Title>
        Home
      </Title>
      <List>
        {links.map((link) => (
          <Item key={link.id}>
            <Link className="link" to={link.path}>{link.name}</Link>
          </Item>
        ))}
      </List>
    </div>
  );
}
