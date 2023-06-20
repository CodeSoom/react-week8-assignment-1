import ReactDOM from 'react-dom';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './App/App';

import store from './App/store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
