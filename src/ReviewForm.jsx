import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const ReviewContainer = styled.div({
  width: '500px',
  margin: '0 auto',
  padding: '10px 20px',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  boxShadow: '0px 0px 5px white',
  borderRadius: '5px',
});

const ReviewButton = styled.button({
  display: 'block',
  margin: '0 auto',
  marginTop: '20px',
  backgroundColor: 'rgba(230, 218, 212, 0.8)',
  padding: '5px 50px',
  borderRadius: '5px',
  fontWeight: '600',
  color: '#F9FDFC',
  fontSize: '20px',
  fontFamily: '"Song Myung", serif',
  border: '5px solid rgba(214, 200, 200, 0.5)',
  cursor: 'pointer',
  '&:hover': {
    color: '#5B4230',
  },
  '&:focus': {
    outline: '2px solid #5B4230',
  },
});

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <ReviewContainer>
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
      <ReviewButton
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </ReviewButton>
    </ReviewContainer>
  );
}
