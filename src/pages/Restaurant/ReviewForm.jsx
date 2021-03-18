import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

import { colors } from '../../styles/Theme';

const ReviewFormWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const ReviewButton = styled.button({
  // Box Model Properties
  width: '100px',
  padding: '.5rem',
  textAlign: 'center',

  // Visual Properties
  color: 'white',
  backgroundColor: colors.orange,

  // Miscellanenous Properties
  borderRadius: '5%',
});

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


export default ReviewForm;
