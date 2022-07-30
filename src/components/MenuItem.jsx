import styled from '@emotion/styled';

import {
  black,
  veryLightGrey,
  lavender,
  nightRider,
} from '@/styles/colors';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1rem',
  '& button': {
    border: `1px solid ${veryLightGrey}`,
    padding: '.4rem 1rem',
    backgroundColor: active ? lavender : 'transparent',
    cursor: 'pointer',
    fontWeight: active ? 'bold' : 'normal',
    color: nightRider,
    '&:hover': {
      fontWeight: 'bold',
      color: black,
    },
  },
}));

export default MenuItem;
