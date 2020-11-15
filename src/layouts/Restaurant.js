import styled from '@emotion/styled';

const ListItem = styled.li({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '100px',
  marginBottom: '15px',
  padding: '20px',
  fontSize: '13px',
  color: '#222228',
  borderBottom: '1px solid #e6e6eb',
});

const Reviewer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'baseline',
});

const ReviewerName = styled.strong({
  display: 'inline-block',
  fontSize: '16px',
  '&:after': {
    content: '"|"',
    display: 'inline-block',
    margin: '0 10px',
    fontWeight: '400',
  },
});

export {
  ListItem,
  Reviewer,
  ReviewerName,
};
