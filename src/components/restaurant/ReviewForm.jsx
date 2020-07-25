import React from 'react';

import TextField from '../TextField';
import Button from '../Button';
import Form from '../Form';

const ReviewForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { score, description } = fields;

  return (
    <Form>
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
        onClick={onSubmit}
      >
        리뷰 남기기
      </Button>
    </Form>
  );
});

export default ReviewForm;
