import styled from '@emotion/styled';

import { darkBlue } from '../assets/styles/colors';

const PageWrapper = styled.div({
  width: '70%',
  margin: '0 auto',
  '& h2': {
    margin: '20px auto',
    textAlign: 'left',
    color: darkBlue,
    fontSize: '2em',
  },
});

export default PageWrapper;
