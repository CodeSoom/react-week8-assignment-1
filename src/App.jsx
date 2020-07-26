import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage';

import Container from './styles/Container';
import Header from './styles/Header';

import { setAccessToken } from './redux/slice';

import { loadItem } from './services/storage';

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
        <HomePage />
      </Header>
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}
