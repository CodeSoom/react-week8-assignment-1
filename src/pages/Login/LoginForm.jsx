import { memo } from 'react';
import tw from 'twin.macro';

const Form = tw.div`
  mt-8 space-y-6
`;

const Input = tw.input`
relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500
focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500
`;

const Login = tw.button`
relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
`;

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Form>
      <div>
        <label htmlFor="login-email" aria-label="E-mail">
          <Input
            type="email"
            id="login-email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label htmlFor="login-password" aria-label="Password">
          <Input
            type="password"
            id="login-password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </label>
      </div>
      <Login
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Login>
    </Form>
  );
});

export default LoginForm;
