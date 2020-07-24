import styled from '@emotion/styled';

import { lightGray, darkBlue, skyBlue } from './styles/constants';

const MenuItem = styled.li({
  width: '100%',
  padding: '30px 0',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  flex: '1 1',
  borderBottom: `1px ${darkBlue} solid`,
  '&:first-of-type': {
    borderTop: `1px ${darkBlue} solid`,
  },
  '&:nth-of-type(even)': {
    backgroundColor: lightGray,
  },
  '& a': {
    fontSize: '1.5em',
    color: darkBlue,
    '&:link': {
      textDecoration: 'none',
    },
    '&:hover': {
      fontWeight: 'bold',
      color: skyBlue,
      cursor: 'pointer',
    },
  },
});

export default MenuItem;
