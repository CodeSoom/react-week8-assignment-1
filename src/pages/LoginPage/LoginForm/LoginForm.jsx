import Button from '@/components/Button';
import TextField from '@/components/TextField';
import { memo } from 'react';

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  return (
    <>
      <div>
        <TextField
          label="E-mail"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </>
  );
});

export default LoginForm;
