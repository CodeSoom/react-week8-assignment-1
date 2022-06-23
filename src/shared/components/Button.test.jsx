import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Button from './Button';

const handleClick = jest.fn();

test.only('Button', async () => {
  render(<Button onClick={handleClick}>버튼</Button>);

  const button = screen.getByRole('button', { name: '버튼' });

  expect(button).toBeInTheDocument();

  const user = userEvent.setup();

  await user.click(button);

  expect(handleClick).toHaveBeenCalled();
});
