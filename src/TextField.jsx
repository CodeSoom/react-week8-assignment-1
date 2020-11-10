import styled from '@emotion/styled';
import React from 'react';

const TextField = React.memo(({
  label, type = 'text', name, value, onChange,
}) => {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  const InputBox = styled.div({
    '& label': {
      display: 'block',
      margin: '0.2em',
    },
    '& input': {
      width: '20em',
      height: '2em',
      border: '0',
      outline: '0',
    },
  });

  return (
    <InputBox>
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
    </InputBox>
  );
});

export default TextField;
