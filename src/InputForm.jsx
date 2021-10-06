import styled from '@emotion/styled';

const InputForm = styled.div({
  marginBottom: '.5em',
  display: 'flex',
  flexDirection: 'column',
  '& input': {
    border: 'none',
    borderBottom: '1px solid black',
    width: '10em',
  },
});

export default InputForm;
