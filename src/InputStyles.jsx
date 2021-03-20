import styled from '@emotion/styled';

export const InputWrapper = styled.span({
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1em',
});

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Label = styled.label({
  color: '#FFABAB',
});

export const Input = styled.input({
  borderRadius: '10px 100px / 120px',
  borderColor: '#FFABAB',
  '&:focus': {
    background: '#FFABAB',
    color: 'rgba(255,245,186,1)',
  },
});

export const Button = styled.button({
  fontSize: '1em',
  color: '#FFF5BA',
  backgroundColor: '#FFABAB',
  textDecoration: 'none',
  border: 0,
  borderRadius: '50% 20% / 10% 40%',
  cursor: 'pointer',
  marginTop: '.5em',
});
