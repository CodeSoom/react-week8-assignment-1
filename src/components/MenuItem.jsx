import styled from '@emotion/styled';

import {
  black,
  color1,
  color2,
  color3,
} from '@/styles/colors';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1rem',
  '& button': {
    border: `1px solid ${color1}`,
    padding: '.4rem 1rem',
    backgroundColor: active ? color2 : 'transparent',
    cursor: 'pointer',
    fontWeight: active ? 'bold' : 'normal',
    color: color3,
    '&:hover': {
      fontWeight: 'bold',
      color: black,
    },
  },
}));

export default MenuItem;
