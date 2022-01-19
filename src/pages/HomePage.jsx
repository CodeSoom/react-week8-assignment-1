import { Link } from 'react-router-dom';

import Item from '../tags/HomePage/Item';
import List from '../tags/HomePage/List';
import Title from '../tags/HomePage/Title';

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
