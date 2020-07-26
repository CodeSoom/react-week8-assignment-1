import styled from '@emotion/styled';

const Input = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '.5em',
  width: '35%',
  '& label': {
    fontSize: '1em',
    fontWeight: 'bold',
  },
  '& input': {
    padding: '.5em .8em',
    fontSize: '1em',
    borderRadius: '.3em',
    border: 0,
  },
});

export default Input;
