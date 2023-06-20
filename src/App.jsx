import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Global } from '@emotion/react';
import HomePage from './Features/Home/HomePage';
import AboutPage from './Features/About/AboutPage';
import LoginPage from './Features/Login/LoginPage';
import RestaurantsPage from './Features/Restaurants/RestaurantsPage';
import RestaurantPage from './Features/Restaurant/RestaurantPage';
import NotFoundPage from './Features/Not-found/NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';
import Header from './Components/Header';
import reset from './styles/reset';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <Global styles={reset} />
      <Header />
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
