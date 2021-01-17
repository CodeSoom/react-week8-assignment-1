import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Global } from '@emotion/core';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import Header from './styles/Header';
import Container from './styles/Container';
import Cotent from './styles/Cotent';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <>
      <Global />
      <Container>
        <Header>
          <h1>
            <Link to="/">헤더</Link>
          </h1>
        </Header>
        <Cotent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/restaurants" component={RestaurantsPage} />
            <Route path="/restaurants/:id" component={RestaurantPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Cotent>
      </Container>
    </>
  );
}
