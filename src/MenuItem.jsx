import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  flexGrow: 1,
  alignSelf: 'center',
  fontSize: '1.5em',
  '& button': {
    cursor: 'pointer',
    width: '100%',
    padding: '.4em 1em',
    textDecoration: 'none',
    color: active ? '#008605' : '#111',
    fontWeight: active ? 600 : 400,
    border: active ? '1px solid #5d5d5d' : '1px solid #CCC',
    background: active ? '#FFF' : 'transparent',
    '&:hover': {
      color: '#008605',
      fontWeight: 600,
    },
  },
}));

export default MenuItem;
