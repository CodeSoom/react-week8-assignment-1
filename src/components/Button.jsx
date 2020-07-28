import styled from '@emotion/styled';

import { darkBlue, skyBlue, pastelPink } from '../assets/styles/colors';

const Button = styled.button(({ active }) => ({
  margin: '0 auto',
  padding: '10px 30px',
  color: darkBlue,
  display: 'block',
  borderRadius: '15px',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: active ? skyBlue : darkBlue,
  backgroundColor: active ? pastelPink : 'transparent',
  fontWeight: 'bold',
  fontSize: '1em',
  outline: 'none',
  '&:hover': {
    border: `3px solid ${skyBlue}`,
    cursor: 'pointer',
  },
}));

export default Button;
