import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;

    &:visited {
      color: #000;
    }
  }

  li {
    list-style-type: none;
  }

  button {
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;

export const AppHeader = styled.header`
  padding: 30px 0;

  & > h1 {
    font-size: 40px;

    & > a {
      &:active {
        color: #000;
      }
    }
  }
`;
