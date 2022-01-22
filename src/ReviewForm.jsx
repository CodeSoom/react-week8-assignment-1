import { css } from '@emotion/css';
import { memo } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import TextField from './TextField';

const ReviewForm = ({ fields, onChange, onSubmit }) => {
  const { score, description } = fields;

  return (
    <Card.Body>

      <Card>
        <Card.Body>
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
              className={css`
                margin-top: 20px;
                width: 100%;
              `}
              type="button"
              onClick={onSubmit}
            >
              리뷰 남기기
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Card.Body>
  );
};

export default memo(ReviewForm);
