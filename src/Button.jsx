import styled from '@emotion/styled';

const Button = styled.button({
  padding: '.4em',
  marginBottom: '1em',
  backgroundColor: '#EEE',
  borderColor: '#EEE',
  borderWidth: 'thin',
  '&:hover': {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Button;
