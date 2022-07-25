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

import { setAccessToken } from './actions';

import { loadItem } from './services/storage';

const Container = styled.header({
  margin: '0 auto',
  width: '90%',
});

const Header = styled.header({
  backgroundColor: 'skyblue',
  '& h1': {
    margin: '0',
    fontSize: '1.5em',
    padding: '1em .5em',
  },

  '& a': {
    color: 'blue',
    textDecoration: 'none',

    '&:hover': {
      color: 'green',
    },
  },
});

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
          <Link to="/">헤더 영역</Link>
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
