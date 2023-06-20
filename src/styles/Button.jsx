import styled from '@emotion/styled';

const Button = styled.button({
  backgroundColor: '#fff',
  color: '#FF5F00',
  borderRadius: '28px',
  fontSize: '3rem',
  fontWeight: 'bold',
  display: 'block',
  margin: '0 auto',
  width: '180px',
  height: '60px',
  lineHeight: '60px',
  '& a': {
    display: 'block',
    width: '100%',
    height: '100%',
    '&:hover': {
      borderRadius: '28px',
      backgroundColor: '#2f2b29',
      color: '#fff',
    },
  },
});

export default Button;
