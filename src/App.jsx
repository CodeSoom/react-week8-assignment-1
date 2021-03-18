import React from 'react';

import styled from '@emotion/styled';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Header from './Header';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

const Container = styled.div({
  fontSize: '16px',
  minHeight: '100vh',
});

const Wrapper = styled.div({
  margin: '0 auto',
  padding: '1em 0',
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Wrapper>
    </Container>
  );
}
