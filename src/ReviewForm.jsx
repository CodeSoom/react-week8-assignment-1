import styled from '@emotion/styled';

import Container from './style/Container';

import TextField from './TextField';

const Button = styled.button({
  fontsize: '.4em',
  width: '8em',
  margin: '0 2em',
  padding: '.2em',
  color: '#b5ac82',
  outline: '#d8ddbe auto .5px',
  '&:hover': {
    backgroundColor: '#efefe2',
    color: '#3f8766',
    fontWeight: '600',
    outline: '#d8ddbe auto 1px',
  },
});

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
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
      <Button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </Button>
    </Container>
  );
}
