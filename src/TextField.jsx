import React, { useCallback } from 'react';

import { Label, Input, Container } from './InputStyles';

export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  const handleChange = useCallback((event) => {
    const { target } = event;
    onChange({ name, value: target.value });
  }, [onchange, name]);

  return (
    <div>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Container>
        <Input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </Container>
    </div>
  );
}
