import styled from '@emotion/styled';

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <StyledReviews>
      {sortedReviews.map((review) => (
        <StyledReview key={review.id}>
          <section className="top">
            <h1>
              {review.name}
            </h1>
            <p>
              {review.score}
              점
            </p>
          </section>
          <section className="bottom">
            {review.description}
          </section>
        </StyledReview>
      ))}
    </StyledReviews>
  );
}
const StyledReviews = styled.div({
  width: '100%',
});

const StyledReview = styled.div({
  display: 'flex',
  flexDirection: 'column',

  marginBottom: '5px',
  padding: '10px',
  borderRadius: '10px',

  backgroundColor: 'skyblue',

  color: 'white',
  '.top': {
    display: 'flex',

    marginBottom: '10px',
    '& p': {
      display: 'flex',
      alignItems: 'center',

      marginLeft: '10px',

      color: 'yellow',
    },

  },

  '.bottom': {
  },
});
