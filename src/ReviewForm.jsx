import React from 'react';
import { FormWrap } from './inputStyle';


import TextField from './TextField';

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <FormWrap>
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
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </FormWrap>
  );
}

export default React.memo(ReviewForm);
