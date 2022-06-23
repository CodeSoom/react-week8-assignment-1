import { Global, css } from '@emotion/react';

const styles = css`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #333;
    transition: color 0.2s;

    &:hover,
    &:active {
        color: tomato;
    }
  }

  li {
    list-style: none;
  }
`;

export default function GolbalStyle() {
  return (
    <Global styles={styles} />
  );
}
