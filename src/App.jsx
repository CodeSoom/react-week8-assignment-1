import React from 'react';

import { Global, css } from '@emotion/react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

import { setAccessToken } from './actions';

import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <>
      <Global
        styles={css`
  *{
    box-sizing:border-box;
    outline: none;   
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
  display: block;
  }
  body {
  line-height: 1;
 
}

  ol, ul,li {
  list-style: none;
}
  blockquote, q {
  quotes: none;
}
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
}
  table {
  border-collapse: collapse;
  border-spacing: 0;
}
  button {
  border-radius: 0;
  border: 0;
  background-color:unset;
}
  a {
  text-decoration: none;
  color: inherit;
}
      `}
      />
      <div>
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
    </>
  );
}
