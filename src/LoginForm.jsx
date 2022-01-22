import { css } from '@emotion/css';
import { memo } from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label htmlFor="login-email">
          E-mail
        </Form.Label>
        <Form.Control
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="login-password">
          Password
        </Form.Label>
        <Form.Control
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Button
          className={css`
            width: 100%;
            margin-top: 20px;
          `}
          type="button"
          onClick={onSubmit}
        >
          Log In
        </Button>
      </Form.Group>
    </Form>
  );
});

export default LoginForm;
