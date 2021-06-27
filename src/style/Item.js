import styled from '@emotion/styled';

import colors from './colors';

const Item = styled.li(({ active }) => ({
  margin: '.5em',
  '& button': {
    width: '12em',
    padding: '.5em',
    outline: `${colors.border_green} auto 1px`,
    color: `${colors.text_primary}`,
    backgroundColor: active ? `${colors.background_green}` : 'transparent',
    fontSize: '.5em',
    cursor: 'pointer',
    '&:hover': {
      outline: `${colors.border_green} auto 1px`,
      color: `${colors.button_gray020}`,
      fontWeight: '700',
    },
  },
}));

export default Item;
