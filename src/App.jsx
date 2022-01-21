import { Switch, Route, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '90%',
  margin: '0 auto',
});

const Header = styled.header({
  backgroundColor: '#EEE',

  '& h1': {
    margin: 0,
    padding: '1em .5em',
  },

  '& a': {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      // color: '#4169e1',
      color: 'red',
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
    <Container>
      <Header>
        <h1>
          <Link to="/">헤더 영역</Link>
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
  );
}
