import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const Wrapper = styled.div`
  padding: 2rem;
  background: #cacaca;
  margin: 2rem 0;
  border: 2px solid #f58410;
  border-radius: 33px;
  & div>input{
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  &>button{
    background: #f58410;
    border-radius: 10px;
    padding: 0.8rem 2rem;
    color: #fff;
    margin-top: 2rem;
    &:hover{
      opacity:.7;
    }
  }
`;

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default React.memo(ReviewForm);
