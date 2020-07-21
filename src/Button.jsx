import styled from '@emotion/styled';

const Button = styled.button({
  margin: '0 auto',
  padding: '10px 30px',
  color: '#364f6b',
  display: 'block',
  border: '3px solid #364f6b',
  borderRadius: '15px',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  fontSize: '1em',
  outline: 'none',
  '&:hover': {
    border: '3px solid #3fc1c9',
    cursor: 'pointer',
  },
});

export default Button;
