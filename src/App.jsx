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

const Container = styled.div({
  display: 'grid',
  margin: '0 auto',
  width: '90%',
});

const Header = styled.header({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#EEE',
  '& h1': {
    margin: 0,
    padding: '.75em 1em',
    fontSize: '1.5em',
  },
  '& h3': {
    margin: 0,
    padding: '.75em 1em',
    fontSize: '1.2em',
  },
  '& a': {
    color: '#111',
    textDecoration: 'none',
    '&:hover': {
      color: '#555',
    },
  },
});

const Section = styled.section({
  backgroundColor: '#F5F5F5',
  '& h1': {
    margin: 0,
    padding: '1em .5em',
    fontSize: '1.5em',
  },
  '& a': {
    color: '#111',
    textDecoration: 'none',
    '&:hover': {
      color: '#555',
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
          <Link to="/">GoEat</Link>
        </h1>
        <h3>
          <Link to="/login">Log in</Link>
        </h3>
      </Header>
      <Section>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Section>
    </Container>
  );
}
