import styled from '@emotion/styled';

const Button = styled.button(({ theme }) => ({
  // Box Model Properties
  width: '100px',
  padding: '.5rem',
  textAlign: 'center',

  // Visual Properties
  color: 'white',
  backgroundColor: theme.colors.orange,

  // Miscellanenous Properties
  borderRadius: '5%',
}));

export default Button;
