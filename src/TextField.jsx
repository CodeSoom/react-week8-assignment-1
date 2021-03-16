import React from 'react';

import styled from '@emotion/styled';

const Label = styled.label({
  display: 'none',
});
const Input = styled.input({
  width: '70%',
  height: '2.5rem',
  fontsize: '1.2rem',
  borderRadius: '1.2rem',
  marginBottom: '1rem',
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
        placeholder={label}
      />
    </div>
  );
}
