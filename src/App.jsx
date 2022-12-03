import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RestaurantsPage from './pages/RestaurantsPage/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { setAccessToken } from './slice/loginSlice';

import { loadItem } from './services/storage';

const Container = styled.div({
  width: '1200px',
  margin: '0 auto',
});

const Header = styled.header({
  borderBottom: '1px solid #CCCCCC',
  height: '110px',
  '& h1': {
    fontSize: '2rem',
  },
  '& a': {
    display: 'block',
    width: '180px',
    padding: '43px 0 0',
    fontSize: '50px',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#000000',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
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
          <Link to="/" className="logo">Eat Ate</Link>
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
