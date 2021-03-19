import styled from '@emotion/styled';

import { colors } from '../../styles/Theme';

const Button = styled.button({
  // Box Model Properties
  width: '100px',
  padding: '.5rem',
  textAlign: 'center',

  // Visual Properties
  color: 'white',
  backgroundColor: colors.orange,

  // Miscellanenous Properties
  borderRadius: '5%',
});

export default Button;
