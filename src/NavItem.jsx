import styled from '@emotion/styled';

const NavItem = styled.li`
  flex:1;
  border: 1px solid #dcdcdc;

  & + & {
    margin-left: 1em;

  }
  a {
    display:block;
    padding: 1em;
    text-align:center;

    &:hover {
      background:#a18cd1;
      color: #fff;
    }
  }
`;

export default NavItem;
