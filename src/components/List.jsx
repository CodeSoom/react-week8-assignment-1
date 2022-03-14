import styled from '@emotion/styled';
import withShadow from '../style/withShadow';

const List = styled.ul`
  padding: 16px;
  list-style: none;
  ${withShadow}
  li {
    margin-bottom: 8px;
    border-bottom: 1px solid #ddd;
  }
`;

export default List;
