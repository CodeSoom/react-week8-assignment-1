import styled from '@emotion/styled';

import palette from './palette';

const Button = styled.button(({ fullWidth, backgroundColor }) => ({
  width: fullWidth && '100%',
  borderRadius: '4px',
  background: backgroundColor === 'gray' ? palette.gray[5] : palette.Teal[5],
  border: 'none',
  '&:hover': {
    background: backgroundColor === 'gray' ? palette.gray[4] : palette.Teal[4],
  },
  outline: 'none',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: 'white',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
}));

export default Button;
