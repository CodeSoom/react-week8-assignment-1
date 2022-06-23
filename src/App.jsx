import {
  Route,
  Routes,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './home';
import AboutPage from './about';
import LoginPage from './sign/LoginPage';
import RestaurantsPage from './restaurant/RestaurantsPage';
import RestaurantPage from './restaurant/RestaurantPage';
import NotFoundPage from './not-found/NotFoundPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';
import Header from './shared/components/Header';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <Header>헤더</Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
