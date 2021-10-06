import React from 'react';

import TextField from './TextField';

import FormButton from './FormButton';

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <>
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
      <FormButton
        type="FormButton"
        onClick={onSubmit}
      >
        리뷰 남기기
      </FormButton>
    </>
  );
}

export default React.memo(ReviewForm);
