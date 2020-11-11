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
import GlobalStyle from './style/GlobalStyle';

const Container = styled.div({
  width: '360px',
  height: '740px',
  backgroundColor: '#FFF',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
});

const Header = styled.div({
  backgroundColor: 'hsl(120, 100%, 37%)',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& a': {
    color: 'white',
    textDecoration: 'none',
  },
});

const PageContainer = styled.div({
  paddingTop: '2rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <h1>
          <Link to="/">Eatgo</Link>
        </h1>
      </Header>
      <PageContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </PageContainer>
    </Container>
  );
}
