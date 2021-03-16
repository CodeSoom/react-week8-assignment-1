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

const Main = styled.div({
  backgroundColor: 'orange',
  width: '330px',
  height: '700px',
  borderRadius: '30px',
  overflow: 'hidden',
  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
});

const Header = styled.header({
  fontFamily: 'Raleway',
  margin: '0',
  height: '100px',
  position: 'relative',
  top: '-20px',
  padding: '40px 0 0 0',
  textAlign: 'center',
  backgroundColor: 'white',
  '& a': {
    textDecoration: 'none',
    color: 'black',
    fontSize: '40px',
  },
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Main>
      <Header>
        <h1>
          <Link to="/">Eat go!</Link>
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
    </Main>
  );
}
