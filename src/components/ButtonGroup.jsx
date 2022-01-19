import styled from '@emotion/styled';

const ButtonGroup = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
  list-style: none;
  button.selected {
    background-color: #ada;
  }
`;

export default ButtonGroup;
