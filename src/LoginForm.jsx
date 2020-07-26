import React from 'react';

function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="login-email">
                E-mail
              </label>
            </td>
            <td>
              <input
                type="email"
                id="login-email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="login-password">
                Password
              </label>
            </td>
            <td>
              <input
                type="password"
                id="login-password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr />
        </tbody>
      </table>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
}

export default React.memo(LoginForm);
