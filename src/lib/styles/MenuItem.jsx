import styled from '@emotion/styled';

import palette from './palette';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  marginTop: '1rem',
  '& button': {
    outline: 'none',
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: active ? palette.gray[3] : 'transparent',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: palette.gray[9],
      fontWeight: 'bold',
    },
  },
}));

export default MenuItem;
