import styled from '@emotion/styled';

import palette from './palette';

const Button = styled.button(({ fullWidth }) => ({
  width: fullWidth && '100%',
  borderRadius: '4px',
  background: palette.Teal[5],
  border: 'none',
  '&:hover': {
    background: palette.Teal[4],
  },
  outline: 'none',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: 'white',
  padding: '0.5rem 1rem',
}));

export default Button;
