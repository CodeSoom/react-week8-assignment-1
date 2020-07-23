import styled from '@emotion/styled';

const Item = styled.li(({ textColor }) => ({
  marginRight: '5px',
  outline: 'none',
  border: 'none',
  borderRadius: '5px',
  color: textColor || '#fff',
  margin: '0 10px',
  cursor: 'pointer',
}));

export default Item;
