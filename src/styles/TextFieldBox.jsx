
import styled from '@emotion/styled';

const TextFieldBox = styled.div({
  padding: '.2em .2em',
  '& label': {
    fontSize: '1.2em',
    fontWeight: 'bold',
    padding: '.2em .2em',
    marginRight: '.5em',
  },
  '& input': {
    fontSize: '16px',
    padding: '.2em .2em',
    border: '1px solid #CCC',
    borderColor: '#CCC',
    borderRadius: '8px',
    height: '1.6em',
  },
});

export default TextFieldBox;
