import styled from '@emotion/styled';

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
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage';

import { setAccessToken } from './common/slice';

import { loadItem } from './services/storage';

const Header = styled.header({
  borderBottom: '2px solid #eee',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.3em',
});

const Logo = styled.header({
  marginLeft: '0.6em',
  padding: '0.3em',
  '& a': {
    textDecoration: 'none',
    color: '#000',
  },
  '& a:hover': {
    textDecoration: 'none',
    color: '#d32f2f',
  },
});

const Menus = styled.div({
  display: 'flex',
  marginRight: '1em',
});

const Menu = styled.div({
  padding: '0 1em',
  margin: '0.4em',
  textAlign: 'center',
  '& a': {
    textDecoration: 'none',
    '& span': {
      fontSize: '18px',
      color: '#5c6bc0',
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
        <Logo>
          <h1>
            <Link to="/">Let Eat Go</Link>
          </h1>
        </Logo>
        <Menus>
          <Menu><Link to="/"><span>Home</span></Link></Menu>
          <Menu><Link to="/about"><span>About</span></Link></Menu>
          <Menu><Link to="/restaurants"><span>Restaurants</span></Link></Menu>
          <Menu><Link to="/login"><span>Log in</span></Link></Menu>
        </Menus>
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
