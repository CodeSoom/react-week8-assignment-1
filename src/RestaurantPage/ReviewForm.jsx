import { memo } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  marginTop: '30px',
});

const Field = styled.div({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '10px',
  color: '#555',
  fontSize: '1em',
  textAlign: 'left',

  '& label': {
    display: 'none',
  },

  '& input': {
    padding: '5px 12px',
    transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
    transitionProperty: 'border-color',

    ':focus-visible': {
      borderColor: '#000',
    },
  },
});

const Footer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

const ScoreInput = styled.input({
  marginRight: '5px',
  border: '1px solid #DBDBDB',
  borderRadius: '6px',
  width: '60px',
  color: '#000',
});

const DescriptionInput = styled.input({
  all: 'unset',
  borderBottom: '1px solid #555',
  width: '100%',
  color: '#000',
});

const Button = styled.button({
  padding: '5px 16px',
  border: '0px',
  borderRadius: '6px',
  width: '95px',
  color: '#fff',
  backgroundColor: '#555',
  fontStyle: 'bold',
  cursor: 'pointer',
  transition: '80ms cubic-bezier(0.33, 1, 0.68, 1)',
  transitionProperty: 'background-color',

  '&:hover': {
    backgroundColor: '#DBDBDB',
  },
});

export default memo(({ fields, onChange, onSubmit }) => {
  const { score, description } = fields;

  function handleChange({ target: { name, value } }) {
    onChange({ name, value });
  }

  return (
    <Container>
      <Field>
        <label htmlFor="review-description">
          리뷰 내용
        </label>
        <DescriptionInput
          type="text"
          id="review-description"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Field>
      <Footer>
        <Field>
          <label htmlFor="review-score">
            평점
          </label>
          <ScoreInput
            type="number"
            id="review-score"
            name="score"
            value={score}
            onChange={handleChange}
          />
          <span>점</span>
        </Field>
        <Button
          type="button"
          onClick={onSubmit}
        >
          리뷰 남기기
        </Button>
      </Footer>
    </Container>
  );
});
