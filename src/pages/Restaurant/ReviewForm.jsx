import React from 'react';

import TextField from '../../components/TextField';

import { Button, FormWrapper } from '../../commons/components';

const ReviewForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { score, description } = fields;

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
});


export default ReviewForm;
