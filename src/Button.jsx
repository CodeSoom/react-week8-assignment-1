import styled from '@emotion/styled';

import {
  lightGray,
  black,
} from './styles/constants';

const Button = styled.button({
  padding: '.4em',
  marginBottom: '1em',
  backgroundColor: lightGray,
  borderColor: lightGray,
  borderWidth: 'thin',
  '&:hover': {
    color: black,
    fontWeight: 'bold',
  },
});

export default Button;
