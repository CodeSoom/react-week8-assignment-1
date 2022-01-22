import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 50px;
  display: flex;

  & > li {
    margin-right: 20px;
  }
`;

export const ListItem = styled.li`
  & > button {
    background-color: #58f07d;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-color: #58ad7d;
    }
  }
`;
