import styled from '@emotion/styled';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  marginBottom: '20px',
});

const Label = styled.label({
  width: '100px',
});

const Input = styled.input({
  flexGrow: '1',
  height: '44px',
  fontSize: '18px',
  color: '#222222',
  border: '0px',
  borderBottom: '1px solid #222228',
});

const Button = styled.button({
  display: 'block',
  width: '100%',
  marginBottom: '10px',
  lineHeight: '38px',
  border: '1px solid #222228',
  backgroundColor: 'transparent',
  fontSize: '13px',
  color: '#222228',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f9f9fa',
  },
});

export {
  Wrapper,
  Label,
  Input,
  Button,
};
