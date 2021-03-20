import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  margin: '0px 7px',
  '& button': {
    padding: '5px 0',
    width: '110px',
    borderRadius: '5px',
    border: 'none',
    boxShadow: active ? '0px 0px 5px rgba(91, 66, 48, 0.8)' : '0px 0px 5px white',
    background: active ? 'rgba(91, 66, 48, 0.8)' : 'rgba(255, 255, 255, 0.5)',
    color: active ? '#F9FDFC' : '#5B4230',
    fontFamily: '"Song Myung", serif',
    fontSize: '20px',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(91, 66, 48, 0.8)',
      boxShadow: '0px 0px 5px rgba(91, 66, 48, 0.8)',
      fontWeight: 'bold',
      color: '#F9FDFC',
    },
    '&:focus': {
      fontWeight: 'bold',
      outline: 'none',
    },
  },
}));

export default MenuItem;
