import styled from '@emotion/styled';

const Button = styled.button`
  appearance: none;
  padding: 8px 16px;
  border: none;
  outline: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
