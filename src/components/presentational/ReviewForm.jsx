import styled from '@emotion/styled';

import React from 'react';

import TextField from './TextField';

import MediaQuery from '../../styles/MediaQuery';

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '1em 0',
  [MediaQuery[0]]: {
    flexDirection: 'row',
    maxWidth: '1200px',
  },
});

const InputField = styled.div({
  width: '100%',
});

const Button = styled.button({
  lineHeight: '2rem',
  width: '100%',
  maxWidth: '700px',
  [MediaQuery[0]]: {
    maxWidth: '300px',
  },
});

const ReviewForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { score, description } = fields;

  return (
    <Wrapper>
      <InputField>
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
      </InputField>
      <Button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </Button>
    </Wrapper>
  );
});

export default ReviewForm;
