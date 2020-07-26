import styled from '@emotion/styled';

const InputItem = styled.div({
  marginBottom: '1em',
  '& label': {
    marginRight: '1em',
    fontWeight: 'bold',
  },
  '& input': {
    padding: '.4em 1em',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
  },
});

export default InputItem;
