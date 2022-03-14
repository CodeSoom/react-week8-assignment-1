import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import RestaurantsPage from './Pages/RestaurantsPage';
import RestaurantPage from './Pages/RestaurantPage';
import NotFoundPage from './Pages/NotFoundPage';

import { setAccessToken } from './redux/slice';

import { loadItem } from './services/storage';

const Container = styled.div({
  margin: '0 auto',
  width: '90%',
});

const Header = styled.header({
  backgroundColor: '#EEE',
  '& .title': {
    margin: '0',
    padding: '1em .5em',
  },
  '& .link': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
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
        <h1 className="title">
          <Link className="link" to="/">EatGo</Link>
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
