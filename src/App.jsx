import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage';
import Header, {
  Logo,
  List,
  Item,
  StyledLink,
} from './layouts/Header';
import Wrapper from './layouts/Wrapper';
import Main from './layouts/Main';

import { setAccessToken } from './redux/slice';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Wrapper>
      <Header>
        <Logo>
          <StyledLink to="/">Eat-GO</StyledLink>
        </Logo>

        <List>
          <Item><StyledLink to="/restaurants">Restaurants</StyledLink></Item>
          <Item flexGrow="1"><StyledLink to="/about">About</StyledLink></Item>
          <Item><StyledLink to="/login">Log in</StyledLink></Item>
        </List>
      </Header>

      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Main>
    </Wrapper>
  );
}
