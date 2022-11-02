import { Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import ResetStyle from './style/ResetStyle';

import Header from './component/Header';
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
    <>
      <Global styles={ResetStyle} />
      <Container>
        <Header />
        <Body>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/restaurants" component={RestaurantsPage} />
            <Route path="/restaurants/:id" component={RestaurantPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Body>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Body = styled.main`
  > div {
    width: 80%;
    margin: 0 auto;
    h1 {
      margin: 0;
      padding: 16px 8px;
      font-size: 28px;
    }
  }
`;
