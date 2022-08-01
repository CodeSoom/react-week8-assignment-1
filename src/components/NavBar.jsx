import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import ROUTES from '../constants/routes';

const Navigations = styled.ul({
  display: 'flex',
  margin: '0',
});

const Navigation = styled.li({
  marginRight: '1.5rem',

  '&:last-child': {
    marginRight: '0',
  },

  '& a': {
    fontSize: '2rem',
    fontWeight: 'bolder',
    color: '#495C83',
    transition: 'all 0.5s',

    '&:hover': {
      opacity: '0.8',
      textDecoration: 'underline',
    },
  },
});

export default function NavBar() {
  return (
    <nav>
      <Navigations>
        {
          ROUTES.map(({ name, path }) => (
            <Navigation key={name}>
              <Link to={path}>{name}</Link>
            </Navigation>
          ))
        }
      </Navigations>
    </nav>
  );
}
