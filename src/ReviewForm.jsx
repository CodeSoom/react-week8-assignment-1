import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

import SubmitButton from './SubmitButton';

const ReviewForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { score, description } = fields;

  const ReviewField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '100%',
    '& button': {
      fontFamily: "'Noto Serif KR', serif",
    },
  });

  return (
    <ReviewField>
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
      <SubmitButton
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </SubmitButton>
    </ReviewField>
  );
});

export default ReviewForm;
