import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Global } from '@emotion/react';

import AppHeader from '../Components/AppHeader';
import HomePage from '../Features/Home/HomePage';
import AboutPage from '../Features/About/AboutPage';
import LoginPage from '../Features/Login/LoginPage';
import RestaurantsPage from '../Features/Restaurants/RestaurantsPage';
import RestaurantPage from '../Features/Restaurant/RestaurantPage';
import NotFoundPage from '../Features/NotFound/NotFoundPage';

import reset from '../styles/reset';

import { setAccessToken } from '../slice';

import { loadItem } from '../services/storage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <Global styles={reset} />

      <AppHeader />

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
