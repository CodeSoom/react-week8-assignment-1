import styled from '@emotion/styled';

const MenuTitle = styled.div`
  margin: 2rem 3rem;
  position: relative;
  font-size: 1.8rem;
  font-weight: 600;

  &::after {
    content: '';
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    background-color: #870009;
    position: absolute;
    top: 0;
    left: -3rem;
  }
`;

export default MenuTitle;
