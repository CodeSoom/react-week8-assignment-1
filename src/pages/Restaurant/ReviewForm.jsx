import styled from '@emotion/styled';
import React from 'react';

import TextField from './TextField';

const ReviewForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { score, description } = fields;

  return (
    <ReviewFormWrapper>
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

      <ReviewButton
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </ReviewButton>
    </ReviewFormWrapper>
  );
});

const ReviewFormWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const ReviewButton = styled.button({
  width: '100px',
  textAlign: 'center',

  padding: '.5rem',

  color: 'white',

  borderRadius: '5%',
  backgroundColor: '#FF8000',


});

export default ReviewForm;
