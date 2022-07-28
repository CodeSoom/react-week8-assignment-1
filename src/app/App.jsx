import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import LoginPage from '../LoginPage';
import RestaurantsPage from '../RestaurantsPage';
import RestaurantPage from '../RestaurantPage';
import NotFoundPage from '../NotFoundPage';

import { setAccessToken } from '../store/slice';

import { loadItem } from '../services/storage';

import AppHeader from '../components/AppHeader';

const Container = styled.div({
  fontSize: '1.6rem',
  backgroundColor: '#ffffff',
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken({ accessToken }));
  }

  return (
    <Container>
      <AppHeader />
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
