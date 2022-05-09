import { memo } from 'react';

import styled from '@emotion/styled/';

import TextField from './TextField';

import Button from './Button';

const Container = styled.div({
  display: 'flex',
});

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <Container>
      <div>
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
      </div>
      <Button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </Button>
    </Container>
  );
}

export default memo(ReviewForm);
