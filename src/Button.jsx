import styled from '@emotion/styled';

import { darkBlue, skyBlue } from './styles/constants';

const Button = styled.button({
  margin: '0 auto',
  padding: '10px 30px',
  color: darkBlue,
  display: 'block',
  border: `3px solid ${darkBlue}`,
  borderRadius: '15px',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  fontSize: '1em',
  outline: 'none',
  '&:hover': {
    border: `3px solid ${skyBlue}`,
    cursor: 'pointer',
  },
});

export default Button;
