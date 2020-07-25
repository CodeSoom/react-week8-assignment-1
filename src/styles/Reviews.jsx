import styled from '@emotion/styled';

const ReviewList = styled.ul({
  display: 'flex',
  padding: '1.5em 0',
  flexFlow: 'row wrap',
  listStyle: 'none',
  justifyContent: 'space-between',
});

const ReviewItem = styled.li({
  width: '25%',
  padding: '1em 2em',
  margin: '.5em .5em',
  border: '1px solid #DDD',
  borderRadius: '10px',
  boxShadow: '3px 3px #EEE',
});

const Score = styled.div({
  fontWeight: 'bold',
  fontSize: '1.25em',
  padding: '.2em 0 1em 0',
  '& span': {
    padding: '.2em .25em',
    borderBottom: '2px solid #516EED',
  },
});

const Reviewer = styled.div({
  fontStyle: 'italic',
  color: '#999',
  padding: '.2em 0 .2em 0',
});

const Description = styled.div({
  padding: '.2em 0 .2em 0',
});

export {
  ReviewList,
  ReviewItem,
  Score,
  Reviewer,
  Description,
};
