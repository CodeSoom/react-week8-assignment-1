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

import {
  lightGray, darkBlue, skyBlue, pastelPink,
} from './styles/constants';

const Header = styled.header({
  textAlign: 'center',
  backgroundColor: lightGray,
  padding: '15px 0',
  borderBottom: `1px ${darkBlue} solid`,
  '& h1': {
    margin: '0 auto',
  },
  '& a': {
    color: pastelPink,
    '&:link': {
      textDecoration: 'none',
    },
    '&:hover': {
      fontWeight: 'bold',
      color: skyBlue,
      cursor: 'pointer',
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
    <div>
      <Header>
        <h1>
          <Link to="/">밥 먹으러 갈래?</Link>
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
    </div>
  );
}
