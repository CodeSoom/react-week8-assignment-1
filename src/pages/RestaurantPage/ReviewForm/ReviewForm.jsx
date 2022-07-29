import styled from '@emotion/styled';

import TextField from '@/components/TextField';

const Form = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  padding: '2rem .5rem',
});

const Button = styled.button({
  backgroundColor: '#4F46E5',
  borderColor: 'transparent',
  borderRadius: '.375rem',
  padding: '.5rem 1rem',
  opacity: 0.9,
  fontWeight: 500,
  color: '#FFFFFF',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1.0,
  },
});

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <Form>
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
    </Form>
  );
}
