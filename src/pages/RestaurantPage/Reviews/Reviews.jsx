import styled from '@emotion/styled';

import { black } from '@/styles/colors';

const List = styled.ul({
  margin: 0,
  padding: '1rem',
  listStyle: 'none',
});

const Review = styled.li({
  marginBottom: '1rem',
  border: `1px solid ${black}`,
  padding: '.5rem',
});

const Name = styled.span({
  fontWeight: 'bold',
});

const Description = styled.p({
  marginTop: '.7rem',
});

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <List>
      {sortedReviews.map((review) => (
        <Review key={review.id}>
          <Name>
            {review.name}
          </Name>
          {' - '}
          <span>
            {review.score}
            점
          </span>
          <Description>
            {review.description}
          </Description>
        </Review>
      ))}
    </List>
  );
}
