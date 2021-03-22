import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import { ThemeProvider } from '@emotion/react';

import App from './App';

import store from './redux/store';

import './assets/css/global.css';

import theme from './styles/theme';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
