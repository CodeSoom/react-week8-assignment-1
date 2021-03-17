import styled from '@emotion/styled';

export const InputWrap = styled.div({
  '& + &': {
    marginLeft: '1rem',
  },
  input: {
    border: '1px solid #dcdcdc',
    padding: '0.5em',
  },
  'label + input': {
    marginLeft: '0.5em',
  },
});

export const FormWrap = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '2rem 0',
  button: {
    marginLeft: '0.8rem',
    padding: '0.8em',
    color: '#fff',
    background: '#a18cd1',
    borderRadius: '2rem',
  },
});
