import styled from '@emotion/styled';

const ReviewItem = styled.li({
  marginRight: '1em',
  width: '250px',
  height: '120px',
  border: '1px solid  #6640f2',
  borderRadius: '4px',
  marginBottom: '16px',
  padding: '8px 16px',
  '& h4': {
    margin: 0,
    borderBottom: '3px solid #6610f2',
  },
  '& p': {
    color: '#333',
    fontSize: '14px',
  },
  '& div': {
    textAlign: 'right',
    color: '#333',
    fontSize: '14px',
  },
});

export default ReviewItem;
