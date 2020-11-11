import styled from '@emotion/styled';

const Button = styled.button(({ isSelected }) => ({
  margin: '0 .5rem',
  padding: '.5rem 1rem',
  width: 'max-content',
  fontSize: '1.7rem',
  letterSpacing: '1px',
  border: 'none',
  color: isSelected ? '#FFFFFF' : '#808080',
  backgroundColor: isSelected ? '#00CC00' : 'EEEEEE',
  outline: 'none',
}));

export default Button;
