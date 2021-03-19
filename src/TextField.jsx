import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const Box = styled.div({
  display: 'block',
  margin: '1em 0',
});

const Label = styled.label({
  fontSize: '1.2em',
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '.5em',
});

const Input = styled.input({
  fontSize: '1.2em',
  padding: '.7em',
  width: '30%',
  height: '2em',
  border: `1px solid ${colors.border}`,
  borderRadius: '5px',
});

function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target } = event;
    onChange({ name, value: target.value });
  }

  return (
    <Box>
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
    </Box>
  );
}

export default React.memo(TextField);
