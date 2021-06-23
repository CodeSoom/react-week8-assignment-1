import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { Global } from '@emotion/react';

import reset from './style/reset';
import Container from './style/Container';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

const Header = styled.header({
  margin: '.5em auto',
  backgroundColor: '#efefe2',
  borderTopLeftRadius: '1.5em',
  borderTopRightRadius: '1.5em',
  '& h1': {
    fontsize: '2.5em',
    padding: '1em 1.5em',
  },
  '& a': {
    color: '#55462b',
    '&:hover': {
      color: '#311800',
    },
  },
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <>
      <Global styles={reset} />
      <Container>
        <Header>
          <h1>
            <Link to="/">Eat Go</Link>
          </h1>
        </Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
}
