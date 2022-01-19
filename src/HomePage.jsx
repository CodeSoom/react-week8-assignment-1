import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const List = styled.ul`
  padding: 16px;
  list-style: none;
  li {
    margin-bottom: 8px;
    border-bottom: 1px solid #ddd;
  }
`;

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <List className="withShadow">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">멸망의 길</Link></li>
      </List>
    </div>
  );
}
