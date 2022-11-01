import { css } from '@emotion/react';

const ResetStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  body {
    padding: 0;
    margin: 0;
    color: #555;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
  }
  
  a {
    color: #555;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
`;

export default ResetStyle;
