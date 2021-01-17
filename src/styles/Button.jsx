import styled from '@emotion/styled';

const Button = styled.button({
  height: '2.7em',
  width: '50%',
  borderRadius: '.5em',
  backgroundColor: '#ea4c89',
  color: 'white',
  fontSize: '.8em',
  fontWeight: 'bold',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f082ac',
  },
  '&:focus': {
    outline: 'none',
  },
});

export default Button;
