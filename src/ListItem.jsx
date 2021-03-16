
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ListItem = styled.li`
  & + & {
    margin-left: 0.5em;
  }
 
  button {
    padding: 0.5em 1.1em;
    border: 1px solid #dcdcdc;
    border-radius: 15px;
    background: none;
    cursor: pointer;
    
    ${({ active }) => active && css`
      color:#fff;
      background:#8989ba;
    `}

    &:hover {
      color:#fff;
      background:#8989ba;
    }
  }
`;

export default ListItem;
