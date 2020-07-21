import styled from '@emotion/styled';

const FormGroup = styled.div({
  label: {
    fontWeight: 'bold',
    fontSize: '1.2em',
    color: '#364f6b',
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: '3px solid #364f6b',
    '&:focus': {
      border: '3px solid #3fc1c9',
      outline: 'none',
    },
  },
});

export default FormGroup;
