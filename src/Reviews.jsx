import styled from '@emotion/styled';

const ReviewList = styled.ul({
  marginTop: '5em',
  margin: '0 auto',
  width: '55em',
});

const ReviewItem = styled.li({
  height: '3em',
  margin: '0.2em',
  padding: '.4em',
  '& div': {
    width: '15em',
    display: 'inline-block',
    padding: '.2em',
  },
});

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ReviewList>
      {sortedReviews.map((review) => (
        <ReviewItem key={review.id}>
          <div>
            {review.name}
          </div>
          <div>
            {review.score}
            점
          </div>
          <div>
            {review.description}
          </div>
        </ReviewItem>
      ))}
    </ReviewList>
  );
}
