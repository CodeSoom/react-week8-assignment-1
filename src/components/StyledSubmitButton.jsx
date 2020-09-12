import styled from '@emotion/styled';

const Button = styled.button({
  margin: '5px',
  width: '150px',
  height: '50px',
  border: 'none',
  fontSize: '1rem',
  borderRadius: '10px',
  cursor: 'pointer',
  boxShadow: '1px 1px 5px rgba(0,0,0,0.2)',
  opacity: '.8',
  backgroundColor: '#3498db',
  color: '#fff',
  '&:hover': {
    opacity: '1',
  },
});

export default Button;
