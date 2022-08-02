import styled from '@emotion/styled';

const List = styled.ul({
  padding: '2rem 0',
});

const Item = styled.li({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  border: '1px solid #555',
  borderRadius: '0.5rem',

  '&:last-of-type': {
    marginBottom: 0,
  },
});

const Name = styled.div({
  padding: '1rem',
  borderRight: '1px solid #555',
  fontSize: '1.6rem',
  fontWeight: 'bold',
});

const Score = styled.div({
  padding: '1rem',
  fontSize: '1.75rem',
  fontWeight: 'bold',
  color: '#fa5252',
});

const Description = styled.div({
  padding: '1rem',
  fontSize: '1.5rem',
});

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <List>
      {sortedReviews.map((review) => (
        <Item key={review.id}>
          <Name>
            {review.name}
          </Name>
          <Score>
            {review.score}
            점
          </Score>
          <Description>
            {review.description}
          </Description>
        </Item>
      ))}
    </List>
  );
}
