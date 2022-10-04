import ReactDOM from 'react-dom';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import { Global } from '@emotion/react';

import App from './App';

import store from './store';
import reset from './styles/reset';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Global styles={reset} />
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
