import React from 'react';

import TextField from './TextField';

import Button from './Button';
import InputWrapper from './InputWrapper';

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <>
      <InputWrapper>
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
      </InputWrapper>
    </>
  );
}

export default React.memo(ReviewForm);
