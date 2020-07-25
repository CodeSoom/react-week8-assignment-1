import styled from '@emotion/styled';

import { lightGray, darkBlue } from '../assets/styles/colors';

const ContentWrapper = styled.div({
  borderStyle: 'solid none',
  borderWidth: '1px',
  borderColor: darkBlue,
  padding: '20px 20px',
  margin: '30px auto',
  backgroundColor: lightGray,
  whiteSpace: 'pre-wrap',
  fontSize: '1.2em',
  '& h3': {
    color: darkBlue,
  },
});

export default ContentWrapper;
