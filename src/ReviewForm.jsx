import React from 'react';

import styled from '@emotion/styled';

import colors from './style/colors';

import TextField from './TextField';

const Container = styled.div({
  width: '90%',
  margin: '1em auto',
  textAlign: 'center',
});

const Button = styled.button({
  width: '8em',
  margin: '0 2em',
  padding: '.2em',
  outline: `${colors.button_gray010} auto .5px`,
  color: `${colors.button_gray020}`,
  backgroundColor: `${colors.background_gray}`,
  fontSize: '.5em',
  '&:hover': {
    outline: `${colors.text_primary} auto 1px`,
    color: `${colors.text_primary}`,
    backgroundColor: `${colors.background_green}`,
    fontWeight: '600',
  },
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
