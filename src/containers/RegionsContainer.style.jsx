import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;

  & > li {
    margin-right: 20px;
  }
`;

export const ListItem = styled.li`
  & > button {
    background-color: #47e4ff;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-color: #476fff;
    }
  }
`;
