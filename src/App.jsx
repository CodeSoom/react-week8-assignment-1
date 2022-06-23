import {
  Route,
  Routes,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import GolbalStyle from './shared/lib/globalStyle';

import Header from './shared/components/Header';
import HomePage from './home';
import AboutPage from './about';
import LoginPage from './sign/LoginPage';
import RestaurantsPage from './restaurant/RestaurantsPage';
import RestaurantPage from './restaurant/RestaurantPage';
import NotFoundPage from './not-found/NotFoundPage';

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
      <GolbalStyle />
      <Header>헤더</Header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurants/:id" element={<RestaurantPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 1.2rem 1rem;
`;
