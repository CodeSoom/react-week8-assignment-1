import React from 'react';

import styled from '@emotion/styled';

const ReviewComponent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px 10%',
});

const Label = styled.label({
  marginRight: '20px',
  fontSize: '25px',
  fontWeight: '600',
  fontFamily: '"Song Myung", serif',
  color: '#F9FDFC',
  cursor: 'pointer',
  '&:hover': {
    color: '#5B4230',
  },
});

const Input = styled.input({
  border: '2px solid rgba(214, 200, 200, 0.5)',
  width: '250px',
  height: '25px',
  opacity: '0.7',
  borderRadius: '5px',
  backgroundColor: 'rgba(230, 218, 212, 0.9)',
  '&:focus': {
    outline: '2px solid #5B4230',
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
    <ReviewComponent>
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
    </ReviewComponent>
  );
}
