import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

import styled from '@emotion/styled';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import LoginPage from './pages/LogIn';
import RestaurantsPage from './pages/Restaurants';
import RestaurantPage from './pages/Restaurant';
import NotFoundPage from './pages/NotFound';

import { setAccessToken } from './redux/slice';

import { loadItem } from './services/storage';

// Steps to Implement features
/**
 *
 * 1. Pure Componentize
 * 2. Simplify Redux with Redux ToolKit
 * 3. Styling with Emotion
 *
 */


export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <Header>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Global styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          }

        body {
          max-width: 420px;
          
          margin: 1rem auto 0;

          font-size:14px;

          box-shadow: 0 3px 2px rgba(0, 0, 0, 0.05),
          0 7px 5px rgba(0, 0, 0, 0.05);
          
          line-height: 1.33;
        }

        main{
          display: block;

          padding: .5rem;
        }
           
        a{
          text-decoration:none;
          color:inherit;
        }

        button{
          all:unset;
          cursor:pointer
        }

        h1 {
          margin:15px 0 10px;

          color:#000;
          font-size: 30px;
          font-weight:600;
        }
        
        `}
      />
    </div>
  );
}

const Header = styled.header({
  backgroundColor: '#FF8000',
  padding: '1rem',
  color: 'white',
});
