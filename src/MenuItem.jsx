import styled from '@emotion/styled';

import {
  lightShadeGray,
  lightGray,
  darkCharcoal,
  black,
} from './styles/constants';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: `1px solid ${lightShadeGray}`,
    background: active ? lightGray : 'transparent',
    color: darkCharcoal,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: black,
    },
  },
}));

export default MenuItem;
