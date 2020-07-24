import React from 'react';

import {
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import LandingPage from './pages/LandingPage';
import RoutePage from './pages/RoutePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

import { Container, Header } from './style';

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
          <Link to="/">Eat_Go</Link>
        </h1>
        <RoutePage />
      </Header>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Redirect to="/" />
      </Switch>
    </Container>
  );
}
