import { Link } from 'react-router-dom';
import { PageHeader } from '../styles/common';
import { LinkList } from './HomePage.style';

export default function HomePage() {
  return (
    <div>
      <PageHeader>Home</PageHeader>
      <LinkList>
        <Link to="/about">About</Link>
        <Link to="/login">Log in</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/xxx">멸망의 길</Link>
      </LinkList>
    </div>
  );
}
