import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const Container = styled.div(() => ({
  marginTop: '3em',
  marginLeft: '3em',
  textAlign: 'left',
}));

const Button = styled.button((type, onClick) => ({
  type,
  onClick,
  display: 'table',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '2em',
  padding: '.4em 7em',
  border: '1px solid #CCC',
  color: '#333',
  background: '#EEE',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#000',
    fontWeight: 'bold',
    background: 'lightpink',
  },
}));

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <>
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
      </Container>
      <Button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </Button>
    </>
  );
}

export default React.memo(ReviewForm);
