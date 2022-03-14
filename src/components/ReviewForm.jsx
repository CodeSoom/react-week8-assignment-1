import React from 'react';
import { Button, Icon } from 'react-materialize';
import TextField from './TextField';

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
      <Button
        node="button"
        type="submit"
        className="Header green-text yellow"
        waves="red"
        onClick={onSubmit}
      >
        <span>리뷰 남기기</span>
        <Icon right>send</Icon>

      </Button>
    </>
  );
}
export default React.memo(ReviewForm);
