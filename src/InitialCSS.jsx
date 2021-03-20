import React from 'react';

import { css, Global } from '@emotion/react';

export default function InitialCSS() {
  return (
    <Global styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Tillana:wght@400;600;700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap');

      body {
        font-size: 16px;
        margin: 0;
        padding: 0;
        height: 100vh;
        background-image: url('../images/palace.jpg');
        background-size:cover;
        background-position: top;
        background-repeat: no-repeat;
        font-family: 'Tillana', cursive;
      };`}
    />
  );
}
