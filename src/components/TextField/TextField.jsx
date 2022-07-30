import styled from '@emotion/styled';

import { color7, color8 } from '@/styles/colors';

const Label = styled.label({
  display: 'block',
  marginBottom: '.2rem',
  fontWeight: 500,
});

const Input = styled.input({
  border: `.5px solid ${color7}`,
  borderRadius: '.375rem',
  padding: '.4rem',
  '&:focus': {
    boxShadow: `0 0 0 1px ${color8}`,
    outline: 'none',
  },
});

export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <div>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
