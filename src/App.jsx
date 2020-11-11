import React, { useEffect } from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken, setScrollState } from './slice';

import { loadItem } from './services/storage';
import { get } from './utils';

const GlobalStyles = css`
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Serif+KR:wght@200&family=Playfair+Display:wght@600&display=swap');

body {
  margin : 0;
  padding: 0;
}
`;

const Container = styled.div({
  margin: 0,
  padding: 0,
  width: '100vw',
  height: '100vh',
  background: 'url(https://images.pexels.com/photos/34650/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260) no-repeat',
  backgroundSize: 'cover',
});


export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  const { prev, scrollY } = useSelector(get('scrollState'));

  useEffect(() => {
    window.addEventListener('scroll', () => {
      dispatch(setScrollState());
    });

    return () => {
      window.removeEventListener('scroll', () => {
        dispatch(setScrollState());
      });
    };
  }, []);

  const Header = styled.header({
    position: 'fixed',
    zIndex: '100',
    display: `${prev >= scrollY ? 'flex' : 'none'}`,
    padding: '0 5em',
    alignItems: 'center',
    width: '100%',
    height: '10vh',
    backgroundColor: 'rgba(255,255,255,0.3)',
    backdropFilter: 'saturate(180%) blur(5px)',
    transitionDuration: '3s',
    '& h1': {
      margin: '0',
      fontSize: '5vh',
    },
    '& a': {
      textDecoration: 'none',
      color: '#ff5e00',
      fontFamily: "'Lobster', cursive",
      cursor: 'pointer',
      '&: hover': {
        color: '#fff',
      },
      '&: active': {
        fontSize: '4.7vh',
      },
    },
  });


  return (
    <Container>
      <Global styles={GlobalStyles} />
      <Header>
        <h1>
          <Link to="/">Eat go</Link>
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
    </Container>
  );
}
