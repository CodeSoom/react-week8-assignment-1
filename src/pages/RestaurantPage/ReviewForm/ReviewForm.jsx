import React from 'react';

import styled from '@emotion/styled';

import Button from '@/components/Button';
import TextField from '@/components/TextField';

const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  padding: '2rem .5rem',
});

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <Container>
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
    </Container>
  );
}

export default ReviewForm;
