import styled from '@emotion/styled';
import React, { useCallback } from 'react';

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
    <Input>
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
    </Input>
  );
});

const Input = styled.div({
  marginBottom: '.5rem',

  '& label': {
    display: 'block',
  },

  '& input': {
    display: 'block',
  },
});

export default TextField;
