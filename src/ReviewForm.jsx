import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  '& button': {
    color: 'white',
    fontFamily: 'Do Hyeon',
    fontSize: '15px',
    width: '100px',
    height: '30px',
    borderRadius: '15px',
    backgroundColor: 'teal',
    border: '2px solid black',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
  },
});

function ReviewForm({ fields, onChange, onSubmit }) {
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
      <ButtonContainer>
        <button
          type="button"
          onClick={onSubmit}
        >
          리뷰 남기기
        </button>
      </ButtonContainer>
    </>
  );
}

export default React.memo(ReviewForm);
