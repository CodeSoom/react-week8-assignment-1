import styled from '@emotion/styled';

import colors from './colors';

const Item = styled.li(({ active }) => ({
  margin: '.5em',
  '& button': {
    width: '12em',
    padding: '.5em',
    outline: `${colors.border} auto 1px`,
    color: `${colors.title}`,
    backgroundColor: active ? `${colors.back}` : 'transparent',
    fontSize: '.5em',
    cursor: 'pointer',
    '&:hover': {
      outline: `${colors.border} auto 1px`,
      color: `${colors.titlehover}`,
      fontWeight: '700',
    },
  },
}));

export default Item;
