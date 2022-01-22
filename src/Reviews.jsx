import styled from '@emotion/styled';

import List from './components/List';
import withShadow from './style/withShadow';

const ReviewItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 16px;
  ${withShadow}

  .name {
    font-size: 12px;
  }

  .score {
    font-size: 14px;
    font-weight: bold;
  }

  .description {
    padding-top: 16px;
    width: 100%;
    font-size: 16px;
  }
`;

export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <List>
      {sortedReviews.map((review) => (
        <ReviewItem key={review.id}>
          <div className="name">
            {review.name}
          </div>
          <div className="score">
            {review.score}
            점
          </div>
          <div className="description">
            {review.description}
          </div>
        </ReviewItem>
      ))}
    </List>
  );
}
