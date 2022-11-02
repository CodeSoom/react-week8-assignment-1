import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export default function Gnb() {
  return (
    <List>
      <Item><Link to="/about">About</Link></Item>
      <Item><Link to="/login">Log in</Link></Item>
      <Item><Link to="/restaurants">Restaurants</Link></Item>
      <Item><Link to="/xxx">멸망의 길</Link></Item>
    </List>
  );
}

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  margin: 8px 16px;
  a {
    color: #333;
    text-decoration: none;
    &:hover {
      color: #000;
      font-weight: bold;
    }
  }
`;
