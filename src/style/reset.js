import { css } from '@emotion/react';

const reset = css`
* {
  box-sizing: border-box;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, h1, h2, h3, p, a, ul, li, label, header {
  font: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
header {
  display: block;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
input button {
  background-color: transparent;
}
`;

export default reset;
