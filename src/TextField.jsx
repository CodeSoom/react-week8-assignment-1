import React, { useCallback } from 'react';

import styled from '@emotion/styled';

const Input = styled.input({
  fontFamily: 'Do Hyeon',
  fontSize: '20px',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '2px solid black',
  marginLeft: '15px',
  transition: 'border-color 0.3s ease-in-out',
  '&:focus': {
    borderColor: 'teal',
    outline: 'none',
  },
});

const InputField = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '20px',
  padding: '0 20px',
  margin: '10px 0 0 0',
});

function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input-${name}`;

  const handleChange = useCallback((event) => {
    const { target } = event;
    onChange({ name, value: target.value });
  }, [onChange, name]);

  return (
    <InputField>
      <label htmlFor={id}>
        {label}
      </label>
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </InputField>
  );
}

export default React.memo(TextField);
