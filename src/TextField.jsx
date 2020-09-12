import React from 'react';

import styled from '@emotion/styled';

const Field = styled.div({
  display: 'flex',
  marginBottom: '.5em',
  '& label': {
    width: '5em',
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
    <Field>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </Field>
  );
}
