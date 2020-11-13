import React from 'react';

import { Global, css } from '@emotion/core';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: gray;
    font-size: 1.6rem;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default function GlobalStyle() {
  return (
    <Global styles={style} />
  );
}
