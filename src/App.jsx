import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

const Body = styled.div({
  backgroundColor: '#f7ede2',
  height: '100vh',
  width: '100%',
  boxSizing: 'border-box',
});

const Header = styled.div({
  width: '100%',
  textAlign: 'center',
  padding: '0.01em',
  backgroundColor: '#f48c06',
  '& h1 a': {
    textDecoration: 'none',
    margin: '0',
    color: '#edf2f4',
    '&:hover': {
      color: '#242423',
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
    <Body>
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
    </Body>
  );
}
