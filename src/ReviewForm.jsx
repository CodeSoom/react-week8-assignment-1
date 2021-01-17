import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const ReviewFields = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: '1em',
  padding: '1em',
  '& button': {
    backgroundColor: '#00D33B',
    color: '#FFF',
    border: '1px solid #666',
    padding: '.2em .6em',
    '&:hover': {
      backgroundColor: '#4CAF4F',
    },
  },
});

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <ReviewFields>
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
    </ReviewFields>
  );
}

export default React.memo(ReviewForm);
