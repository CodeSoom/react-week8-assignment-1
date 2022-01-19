import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

const Layout = styled.div`
  max-width: 768px;
  margin: 16px auto;
  padding: 16px;
`;

const Header = styled.header`
  font-size: 24px;
  h1 {
    border-bottom: 1px solid #ddd;
  }
`;

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <Layout className="withShadow">
      <Global
        styles={css`
          .withShadow {
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
          }
        `}
      />
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
    </Layout>
  );
}
