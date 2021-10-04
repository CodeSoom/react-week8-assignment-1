import styled from '@emotion/styled';

const InputForm = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
  '& input': {
    width: '150px',
    border: 'none',
    borderBottom: '1px solid black',
  },
});

export default InputForm;
