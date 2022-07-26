import { Link } from 'react-router-dom';

export const ROUTES = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Log in',
    path: '/login',
  },
  {
    name: 'Restaurants',
    path: '/restaurants',
  },
  {
    name: '멸망의 길',
    path: '/xxx',
  },
];

export default function NavBar() {
  return (
    <ul>
      {
        ROUTES.map(({ name, path }) => (
          <li key={name}>
            <Link to={path}>{name}</Link>
          </li>
        ))
      }
    </ul>
  );
}
