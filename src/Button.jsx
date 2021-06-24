import styled from '@emotion/styled';

const Button = styled.button(({ background, hoverBackground }) => ({
  appearance: 'none',
  background,
  color: '#fff',
  margin: 0,
  padding: '8px 16px',
  fontSize: '16px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  cursor: 'pointer',
  transition: '0.5s',
  '&:active, &:hover, &:focus': {
    background: hoverBackground,
    outline: 0,
  },
}));

export default Button;
