import React from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const ReviewBox = styled.div`
  padding: 2rem 0;
  border-top: 1px solid #4e0005;
  border-bottom: 1px solid #4e0005;
`;

const Button = styled.button`
  width: 150px;
  height: 45px;
  color : #ffffff;
  background: #870009;
  margin: 0 auto;

`;

function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <Container>
      <ReviewBox>
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
          placeholder="이 장소의 후기를 남겨주세요!"
          value={description}
          onChange={onChange}
        />
        <Button
          type="button"
          onClick={onSubmit}
        >
          리뷰 남기기
        </Button>
      </ReviewBox>
    </Container>
  );
}

export default React.memo(ReviewForm);
