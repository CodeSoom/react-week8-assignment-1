import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
});

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <List>
      <Item>
        <TextField
          label="평점"
          name="score"
          type="number"
          value={score}
          onChange={onChange}
        />

      </Item>
      <Item>
        <TextField
          label="리뷰 내용"
          name="description"
          value={description}
          onChange={onChange}
        />
      </Item>

      <Item>
        <button
          type="button"
          onClick={onSubmit}
        >
          리뷰 남기기
        </button>
      </Item>
    </List>
  );
}

export default React.memo(ReviewForm);
