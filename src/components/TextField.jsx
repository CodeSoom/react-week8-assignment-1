import React from 'react';

import FormGroup from './FormGroup';

const TextField = React.memo(({
  label, type = 'text', name, value, onChange,
}) => {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <FormGroup>
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
    </FormGroup>
  );
});

export default TextField;
