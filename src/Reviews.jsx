import { memo } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Reviews = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <Card.Body>
      <ListGroup>
        {sortedReviews.map((review) => (
          <ListGroup.Item key={review.id}>
            <Card>
              <Card.Header>
                <Card.Title>
                  {review.name}
                </Card.Title>
              </Card.Header>
              <Card.Body>

                <Card.Text>
                  {review.score}
                  점
                </Card.Text>
                <Card.Text>
                  {review.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card.Body>
  );
};

export default memo(Reviews);
