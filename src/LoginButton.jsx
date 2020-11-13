import styled from '@emotion/styled';

const LoginButton = styled.button(() => ({
  width: '330px',
  height: '40px',
  border: 'solid 1px rgb(255 255 255)',
  boxShadow: '0 2px 6px 0 rgba(61,80,81,.08)',
  borderRadius: 0,
  backgroundColor: '#00bc00',
  fontWeight: 900,
  color: 'white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#009900',
  },
}));

export default LoginButton;
