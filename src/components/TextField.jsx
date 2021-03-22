import React, { useCallback } from 'react';

import styled from '@emotion/styled';

const Field = styled.div({
  marginBottom: '.5rem',

  '& label': {
    display: 'block',
  },

  '& input': {
    display: 'block',
  },
});

const TextField = React.memo(({
  label,
  type = 'text',
  name,
  value,
  onChange,
}) => {
  const id = `input-${name}`;

  const handleChange = useCallback((event) => {
    const { target } = event;
    onChange({ name, value: target.value });
  }, [onChange]);

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
});

export default TextField;
