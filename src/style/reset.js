import { css } from '@emotion/react';

const reset = css`
* {
  box-sizing: border-box;
}
body, div, h1, h2, h3, p, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
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
