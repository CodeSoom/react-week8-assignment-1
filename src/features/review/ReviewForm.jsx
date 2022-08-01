import styled from '@emotion/styled';

import TextField from './TextField';

const Button = styled.button({
  marginTop: '1rem',
  padding: '0.75rem 0.75rem',
  border: '2px solid #495057',
  borderRadius: '0.4rem',
  color: '#495057',
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
});

export default function ReviewForm({ fields, onChange, onSubmit }) {
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
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </Button>
    </>
  );
}
