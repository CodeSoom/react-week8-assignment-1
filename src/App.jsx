import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import HomePage from 'presentational/HomePage';
import AboutPage from 'presentational/AboutPage';
import LoginPage from 'container/LoginPage';
import RestaurantsPage from 'container/RestaurantsPage';
import RestaurantPage from 'container/RestaurantPage';
import NotFoundPage from 'presentational/NotFoundPage';
import { setAccessToken } from '_redux/slice';
import Background from './Background';


import { loadItem } from './services/storage';

const Wrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  height: '100vh',
  margin: '0 auto',
});


const Header = styled.header({
  height: '50px',
  h1: {
    lineHeight: '50px',
  },
});

const Container = styled.div({
  flex: '1',
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <Background />

      <Wrap>
        <Header>
          <h1>
            <Link to="/">헤더 영역</Link>
          </h1>
        </Header>

        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/restaurants" component={RestaurantsPage} />
            <Route path="/restaurants/:id" component={RestaurantPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </Wrap>
    </div>
  );
}
