import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage';

import { setAccessToken } from './slice';
import { loadItem } from './services/storage';
import { AppWrapper, AppHeader } from './App.style';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <AppWrapper>
      <AppHeader>
        <h1>
          <Link to="/">헤더 영역</Link>
        </h1>
      </AppHeader>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
