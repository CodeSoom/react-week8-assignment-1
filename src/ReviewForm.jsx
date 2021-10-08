import { memo } from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const Button = styled.button({
  width: 'fit-content',
  marginBottom: '1em',
  border: 'none',
  borderRadius: '.3em',
  padding: '.3em',
  backgroundColor: '#EEE',
  cursor: 'pointer',
  '&:hover': {
    color: '#2ecc71',
  },
});

const ReviewForm = memo(({ fields, onChange, onSubmit }) => {
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
});

export default ReviewForm;
