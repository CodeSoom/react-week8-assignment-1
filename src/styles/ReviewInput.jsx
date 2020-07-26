import styled from '@emotion/styled';

const Input = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '.5em',
  width: '100%',
  '& label': {
    fontSize: '1em',
    fontWeight: 'bold',
  },
  '& input': {
    padding: '.5em .8em',
    fontSize: '1em',
    borderRadius: '.3em',
    border: '.05em solid #bdbdbd',
    width: '75%',
  },
});

export default Input;
