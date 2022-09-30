import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import Header from './Header';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage/LoginPage';
import RestaurantsPage from './RestaurantsPage/RestaurantsPage';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './LoginPage/loginSlice';

import { loadItem } from './services/storage';

const Container = styled.div({
  margin: '0 auto',
  paddingTop: '5.5em',
  width: '90%',
  maxWidth: '1200px',
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Container>
      <Header />
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
