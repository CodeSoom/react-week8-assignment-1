import styled from '@emotion/styled';

const LogButton = styled.button({
  margin: '2em 15em',
  padding: '.2em',
  color: '#d9c97e',
  backgroundColor: 'white',
  outline: '#d8ddbe auto .5px',
  '&:hover': {
    backgroundColor: '#d9c97e',
    color: '#e5e5e5',
    fontWeight: '600',
    outline: '#d8ddbe auto 1px',
  },
});

export default LogButton;
