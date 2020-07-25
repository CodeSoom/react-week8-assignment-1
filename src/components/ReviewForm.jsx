import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const Layout = styled.div({
  display: 'flex',
  padding: '1.5em 0 1.5em 0',
  borderTop: '1px solid #CCC',
  borderBottom: '1px dotted #CCC',
  margin: 0,
  '& button': {
    color: '#FFF',
    fontColor: '#FFF',
    fontSize: '16px',
    padding: '.2em 1em',
    margin: '.2em .2em',
    border: '1px solid #516EED',
    background: '#516EED',
    borderRadius: '8px',
    '&:hover': {
      fontWeight: 'bold',
      color: '#FFF',
    },
  },
});

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <Layout>
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
    </Layout>
  );
}

export default React.memo(ReviewForm);
