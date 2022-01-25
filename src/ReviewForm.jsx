import styled from '@emotion/styled';

import React from 'react';

import TextField from './TextField';

import RestaurantBox from './styles/RestaurantBox';

const Box = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const SubmitButton = styled.button({
  marginTop: '24px',
  backgroundColor: '#6d6d6d',
  borderRadius: '10px',
  padding: '12px 18px',
  fontWeight: '500',
  fontSize: '18px',
});

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <RestaurantBox>
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
      <Box>
        <SubmitButton
          type="button"
          onClick={onSubmit}
        >
          리뷰 남기기
        </SubmitButton>
      </Box>
    </RestaurantBox>
  );
}

export default React.memo(ReviewForm);
