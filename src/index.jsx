import ReactDOM from 'react-dom';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import { Global } from '@emotion/react';

import App from './App';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Global styles={{
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            listStyle: 'none',
            textDecoration: 'none',
          },
        }}
        />
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
