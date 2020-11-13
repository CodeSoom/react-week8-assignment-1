import styled from '@emotion/styled';

const ReviewWrapper = styled.div({
  height: '70vh',
  overflow: 'auto',
  '& li': {
    margin: '1.5em 0em',
    '& div:first-child': {
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginBottom: '.5em',
    },
  },
});

export default ReviewWrapper;
