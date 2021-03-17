import React from 'react';

import styled from '@emotion/styled';

export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  const InputWrap = styled.div({
    '& + &': {
      marginLeft: '1rem',
    },
    input: {
      border: '1px solid #dcdcdc',
      padding: '0.5em',
    },
    'label + input': {
      marginLeft: '0.5em',
    },
  });

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <InputWrap>
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
    </InputWrap>
  );
}
