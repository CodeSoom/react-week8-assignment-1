import {
  Switch,
  Route,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import HomePage from '../features/home/HomePage';
import AboutPage from '../features/about/AboutPage';
import LoginPage from '../features/login/LoginPage';
import RestaurantsPage from '../features/restaurants/RestaurantsPage';
import RestaurantPage from '../features/restaurant/RestaurantPage';
import NotFoundPage from '../features/not-found/NotFoundPage';

import { setAccessToken } from '../features/login/loginSlice';

import { loadItem } from '../services/storage';

import AppHeader from '../components/AppHeader';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontSize: '1.6rem',
  backgroundColor: '#ffffff',
});

const Wrapper = styled.div({
  flex: '1',
  padding: '3rem',
});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');

  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Container>
      <AppHeader />

      <Wrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Wrapper>
    </Container>
  );
}
