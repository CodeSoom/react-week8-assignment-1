import styled from '@emotion/styled';

const StyledListButton = styled.button(({ bgColor }) => ({
  backgroundColor: bgColor || '#3498db',
  outline: 'none',
  border: 'none',
  padding: '5px 10px',
  color: '#fff',
  borderRadius: '3px',
  cursor: 'pointer',
}));

export default StyledListButton;
