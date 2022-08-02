import { Link, useRouteMatch } from 'react-router-dom';

import styled from '@emotion/styled';

import ROUTES from '../constants/routes';

const Navigations = styled.ul({
  display: 'flex',
  margin: '0',
});

const Navigation = styled.li(({ active }) => ({
  marginRight: '2rem',

  '&:last-child': {
    marginRight: '0',
  },

  '& a': {
    fontSize: '1.6rem',
    fontWeight: 'bolder',
    transition: 'all 0.5s',

    '&:hover': {
      opacity: '1',
      textDecoration: 'underline',
    },

    color: active ? '#fa5252' : '#000000',
    opacity: active ? '1' : '0.6',
    textDecoration: active ? 'underline' : 'none',
  },
}));

export default function NavBar() {
  const isActive = (path) => useRouteMatch({
    path,
    exact: true,
  });

  return (
    <nav>
      <Navigations>
        {
          ROUTES.map(({ name, path }) => (
            <Navigation key={name} active={isActive(path)}>
              <Link to={path}>{name}</Link>
            </Navigation>
          ))
        }
      </Navigations>
    </nav>
  );
}
