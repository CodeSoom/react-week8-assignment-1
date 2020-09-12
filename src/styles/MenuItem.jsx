import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  width: '100%',
  marginBottom: '.1em',
  marginRight: '.1em',
  '& button': {
    width: '100%',
    padding: '1em',
    background: active ? '#424242' : '#ff',
    border: 0,
    fontSize: '1em',
    fontWeight: 'bold',
    color: active ? '#ffffff' : '#616161',
    textDecoration: 'none',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
      width: '100%',
      border: 0,
      background: '#BDBDBD',
      fontWeight: 'bold',
      color: '#424242',
    },
  },
}));


export default MenuItem;
