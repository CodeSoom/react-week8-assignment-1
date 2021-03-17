import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

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
      <header>
        <h1>
          <Link to="/">헤더 영역</Link>
        </h1>
      </header>
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
