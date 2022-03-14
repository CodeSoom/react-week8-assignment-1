import { Link } from 'react-router-dom';

import Item from '../tags/HomePage/Item';

export default function ItemLink({ to, text }) {
  return (
    <Item><Link to={to}>{text}</Link></Item>
  );
}
