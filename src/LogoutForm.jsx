import { css } from '@emotion/css';
import { Button, Form } from 'react-bootstrap';

export default function LogoutForm({ onClick }) {
  return (
    <Form>
      <Button
        className={css`
          width: 100%
        `}
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </Form>
  );
}
