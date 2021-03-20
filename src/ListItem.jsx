
import styled from '@emotion/styled';

import green from '../fixtures/color';

const ListItem = styled.li(({ active }) => ({
  width: '23%',
  'button, a': {
    fontSize: '1rem',
    display: 'block',
    boxSizing: 'border-box',
    width: '100%',
    padding: '0.5em 1.1em',
    border: '1px solid #dcdcdc',
    borderRadius: '1em',
    color: active && '#fff',
    background: active && `${green}`,
    textAlign: 'center',
    transition: '0.2s linear',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff',
      background: `${green}`,
    },
  },
}));

export default ListItem;
