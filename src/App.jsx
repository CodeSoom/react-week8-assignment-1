import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">맛집찾자</Link>
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

const Container = styled.header({
  width: '90%',
  margin: '0 auto',
});

const Header = styled.header({
  borderRadius: '10px',

  backgroundColor: '#B2EBF4',
  '& h1': {
    margin: '0',
    padding: '1em .5em',
    fontSize: '1.5em',
  },

  '& a': {
    display: 'flex',
    justifyContent: 'center',
    color: '#FFFFFF',
    textDecoration: 'none',
    '&:hover': {
      color: '#FFB2D9',
    },
  },
});
