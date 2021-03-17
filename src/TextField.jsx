import React, { useCallback } from 'react';

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
    </div>
  );
}
