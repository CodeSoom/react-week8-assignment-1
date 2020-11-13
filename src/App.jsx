import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import NavigatorBar from './NavigatorBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

const Container = styled.div({
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '600px',
  gridTemplateRows: '68px 52px 480px',
  rowGap: '10px',
  alignItems: 'stretch',
  justifyItems: 'stretch',
  boxShadow: '0 0 8px 2px rgba(0, 0, 0, 0.04)',
});

const Header = styled.header({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#00D33B',
  '& h1, h3': {
    margin: 0,
    padding: '.75em 1em',
    fontSize: '1.5em',
  },
  '& h1': {
    fontSize: '1.5em',
  },
  '& h3': {
    fontSize: '1em',
    '&:hover': {
      color: '#555',
      textDecoration: 'underline',
    },
  },
  '& a': {
    color: '#FFF',
    textDecoration: 'none',
  },
});
const Navigator = styled.nav({
  alignItems: 'center',
  backgroundColor: '#FFF',
});

const Section = styled.section({
  margin: 0,
  padding: '0 1em 2em 1em',
  backgroundColor: '#FFF',
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
          <Link to="/login">내정보</Link>
        </h3>
      </Header>
      <Navigator>
        <NavigatorBar />
      </Navigator>
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
