import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

import { InputBox } from '../styled';

const Container = styled.div({
  position: 'sticky',
  top: '0',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  gridAutoFlow: 'column dense',
  height: '20%',
  width: '60%',
  backgroundColor: 'white',
  padding: '1em',

  '& button': {
    display: 'block',
    width: '30%',
    padding: '1em',
    marginTop: '1em',
    backgroundColor: '#FF91AC',
    border: '0px solid',
    color: '#FFFFFF',
    borderRadius: ' 10px 1px ',
  },
});

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <Container>
      <InputBox width="95%">
        <TextField
          label="평점"
          name="score"
          type="number"
          value={score}
          onChange={onChange}
        />
      </InputBox>

      <InputBox width="95%">
        <TextField
          label="리뷰 내용"
          name="description"
          value={description}
          onChange={onChange}
        />
      </InputBox>
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </Container>
  );
}
