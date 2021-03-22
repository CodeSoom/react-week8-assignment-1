import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

import { colors } from './designSystem';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: '2em 3em',
  borderTop: `1px solid ${colors.border}`,
  borderBottom: `1px solid ${colors.border}`,
});

const Button = styled.button({
  fontSize: '1em',
  display: 'block',
  position: 'relative',
  margin: '.2em 0',
  padding: '1em .7em',
  width: '30%',
  color: colors.white,
  border: `1px solid ${colors.highlight}`,
  borderRadius: '5px',
  background: colors.highlight,
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

export default React.memo(ReviewForm);
