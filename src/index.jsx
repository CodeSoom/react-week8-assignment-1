import ReactDOM from 'react-dom';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import GlobalStyles from './styles/GlobalStyles';

import App from './App';

import store from './store/store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
