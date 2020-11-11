import styled from '@emotion/styled';

const Button = styled.button({
  width: '120px',
  height: '40px',
  padding: '0 16px',
  backgroundColor: '#6640f2',
  border: '1px solid  #6640f2',
  borderRadius: '4px',
  fontSize: '16px',
  color: '#FFF',
  cursor: 'pointer',
  outline: 0,
  margin: '4px 4px',

  '&:hover': {
    fontWeight: 'bold',
  },
});

export default Button;
