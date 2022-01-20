import List from '../tags/HomePage/List';
import Title from '../tags/HomePage/Title';

import ItemLink from '../components/ItemLink';

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <List>
        <ItemLink to="/about" text="About" />
        <ItemLink to="/login" text="Log in" />
        <ItemLink to="/restaurants" text="Restaurants" />
        <ItemLink to="/xxx" text="멸망의 길" />
      </List>
    </div>
  );
}
