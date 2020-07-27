import React from 'react';

import TextField from './TextField';

import Review from '../styles/Review';
import Button from '../styles/ReviewButton';

function ReviewForm({
  restaurantId,
  fields,
  onChange,
  onSubmit,
}) {
  const { score, description } = fields;

  return (
    <Review>
      <TextField
        label="평점"
        name="score"
        type="number"
        value={score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        value={description}
        onChange={onChange}
      />
      <Button
        type="button"
        onClick={() => onSubmit(restaurantId)}
      >
        리뷰 남기기
      </Button>
    </Review>
  );
}

export default React.memo(ReviewForm);
