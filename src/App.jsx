import React from 'react';

import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

import LandingPage from './pages/LandingPage';
import RoutePage from './pages/RoutePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';

import { Container, Content } from './styles';

const ImageBase = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;

  background-image: url('https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_1280.jpg');  background-position: center center;
  background-size: cover;
  opacity: 0.1;
  top: 0;
  left: 0;
  z-index: -999999;
 `;

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Container>
      <ImageBase />
      <RoutePage />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Redirect to="/" />
        </Switch>
      </Content>
    </Container>
  );
}
