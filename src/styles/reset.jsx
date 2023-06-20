import { css } from '@emotion/react';

const reset = css`
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
    font-size: 100%;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
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
  html {
    font-size: 62.5%;
    font-family: 'Montserrat', 'Noto Sans KR', 'sans-serif';
    body {
      font-size: 1.6rem;
    }
  }
  ol, ul {
    list-style: none;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    outline: none;
    color: inherit;
    &:active,
    &:hover {
      text-decoration: none;
      color: inherit;
      outline: 0;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    background: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
    white-space: nowrap;
    letter-spacing: inherit;
    font: inherit;
    color: inherit;
  }
  input {
    outline: none;
  }
`;

export default reset;
