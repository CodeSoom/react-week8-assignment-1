import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import tw from 'twin.macro';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/Login/LoginPage';
import RestaurantsPage from './pages/Restaurants/RestaurantsPage';
import RestaurantPage from './pages/Restaurant/RestaurantPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

import { setAccessToken } from './store/slice';

import { loadItem } from './services/storage';

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-indigo-100 to-pink-100`,
  ],
};

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div css={styles.container({ hasBackground: true })}>
      <div tw="flex flex-col justify-center h-full gap-y-5">
        <header>
          <h1>
            <Link to="/">헤더 영역</Link>
          </h1>
        </header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}
