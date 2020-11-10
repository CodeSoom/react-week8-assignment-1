import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import NavList from './styles/NavList';
import NavItem from './styles/NavItem';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage';

import { setAccessToken } from './modules/slice';

import { loadItem } from './services/storage';

const Container = styled.div({
  margin: '0 auto',
  padding: 0,
});

const Header = styled.header({
  width: '100%',
  margin: 0,
  '& h1': {
    fontSize: '1.5em',
    margin: '0 auto',
    padding: '1em .5em',
    maxWidth: '1176px',
    '& a': {
      color: '#000',
      textDecoration: 'none',
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
          <Link to="/">EatGo</Link>
        </h1>
        <NavList>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">Log in</Link>
          </NavItem>
          <NavItem>
            <Link to="/restaurants">Restaurants</Link>
          </NavItem>
          <NavItem>
            <Link to="/xxx">멸망의 길</Link>
          </NavItem>
        </NavList>
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
