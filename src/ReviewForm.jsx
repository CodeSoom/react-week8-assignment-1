import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  const FormWrap = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem 0',
    button: {
      marginLeft: '0.8rem',
      padding: '0.8em',
      color: '#fff',
      background: '#a18cd1',
      borderRadius: '2rem',
    },
  });

  return (
    <FormWrap>
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
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </FormWrap>
  );
}

export default React.memo(ReviewForm);
