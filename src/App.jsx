import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Header from './Header/Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage/LoginPage';
import RestaurantsPage from './RestaurantsPage/RestaurantsPage';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import NotFoundPage from './NotFoundPage';

import MakeCenter from './styles/MakeCenter';

import { setAccessToken } from './LoginPage/loginSlice';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <MakeCenter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </MakeCenter>
  );
}
