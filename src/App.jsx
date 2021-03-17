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

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  const Container = styled.div({
    margin: '0 auto',
    width: '90%',
  });

  const Header = styled.header({
    margin: '2rem 0',
    '& h1 a': {
      display: 'block',
      color: '#a18cd1',
      fontSize: '2rem',
      textAlign: 'center',
    },
  });

  const Body = styled.div({
    padding: '1rem',
  });

  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">레스토랑 검색 서비스</Link>
        </h1>
      </Header>
      <Body>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Body>
    </Container>
  );
}
