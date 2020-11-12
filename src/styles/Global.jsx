import React from 'react';

import { Global as GlobalStyle, css } from '@emotion/core';

const fontNormal = '1.6rem';

export default function Global() {
  return (
    <GlobalStyle
      styles={css`
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
          font-size: 62.5%;
        }

        body {
          background-color: gray;
          font-size: ${fontNormal};
        }
      `}
    />
  );
}
