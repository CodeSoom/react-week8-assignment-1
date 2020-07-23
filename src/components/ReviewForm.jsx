import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';
import StyledSubmitButton from './StyledSubmitButton';

const StyledReviewForm = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0',
  padding: '5px',
  borderTop: '1px solid #303030',
  borderBottom: '1px solid #303030',
  '& > div': {
    marginBottom: '10px',
    label: {
      display: 'inline-block',
      width: '100px',
    },
  },
});

const ReviewForm = ({ fields, onChange, onSubmit }) => {
  const { score, description } = fields;

  return (
    <StyledReviewForm>
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
      <StyledSubmitButton
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </StyledSubmitButton>
    </StyledReviewForm>
  );
};

export default React.memo(ReviewForm);
