import { css } from '@emotion/react';

const Reset = css`
 * {
   box-sizing: border-box;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   padding: 0;
   margin: 0;
   font-size: 16px;
 }

 a {
   color: inherit;
   text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export default Reset;
