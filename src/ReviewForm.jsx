import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const Button = styled.button({
  width: '70%',
  height: '2.5rem',
  borderRadius: '1.2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

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
      <Button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </Button>
    </>
  );
}

export default React.memo(ReviewForm);
