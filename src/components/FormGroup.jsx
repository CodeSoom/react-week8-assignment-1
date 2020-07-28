import styled from '@emotion/styled';

import { darkBlue, skyBlue } from '../assets/styles/colors';

const FormGroup = styled.div({
  label: {
    fontWeight: 'bold',
    fontSize: '1.2em',
    color: darkBlue,
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: `3px solid ${darkBlue}`,
    '&:focus': {
      border: `3px solid ${skyBlue}`,
      outline: 'none',
    },
  },
});

export default FormGroup;
