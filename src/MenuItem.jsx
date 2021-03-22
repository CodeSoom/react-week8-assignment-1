import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => (
  {
    marginRight: '1em',
    '& button': {
      border: 0,
      background: active ? '#EEE' : 'transparent',
      cursor: 'pointer',
      color: '#333',
      textDecoration: 'none',
      '&:hover': {
        fontWeight: 'bold',
        color: '#000',
      },
    },
  }
));

export default MenuItem;
