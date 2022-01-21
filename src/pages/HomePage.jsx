import { Link } from 'react-router-dom';

import List from '../components/List.style';
import Item from '../components/Item.style';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </div>
  );
}
